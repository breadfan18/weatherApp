$city = $('#city');
$temp = $('#temp');
$feelsLike = $('#feelsLike');
$weather = $('#weather');
$inputField = $('#input');
$submit = $('.waves-effect');
$displayBody = $('.displayBody');
$displayCard = $('.displayCard');
let userInput;

function getWeatherData() {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=8e0c596f2a6fd2d958d7bb12765da115&units=imperial`
    }).then(
        (data) => {
            render(data);
        },
        (error) => {
            console.log('error', error);
        }
    )
}

function render(weatherData) {
    $displayCard.addClass('cardSwipeIn');
    $temp.text(`${Math.floor(weatherData.main.temp)}°F`);
    $city.text(weatherData.name);
    $feelsLike.text('Feels Like: ' + Math.floor(weatherData.main.feels_like) + '°F');
    $weather.text(weatherData.weather[0].main);
    $('#max').text('High: '+ Math.floor(weatherData.main.temp_max) + '°F');
    $('#min').text('Low: ' + Math.floor(weatherData.main.temp_min) + '°F');
    changeBodyImage(weatherData.weather[0].main)
}

function handleWeather(e) {
    e.preventDefault();
    userInput = $inputField.val();
    getWeatherData();
    $inputField.val('');
}

function changeBodyImage(weather) {
    switch (weather) {
        case 'Cloudy':
            $displayBody.css('backgroundImage', 'url(\'https://p0.piqsels.com/preview/147/363/745/clouds-cloudy-dark-dark-clouds.jpg\')')          
            break;
        case 'Clouds':
            $displayBody.css('backgroundImage', 'url(\'https://www.farmersalmanac.com/wp-content/uploads/2020/11/Clouds-Predict-Local-Weather-i861387936-1184x630.jpg\')')          
            break;
        case 'Clear':
            $displayBody.css('backgroundImage', 'url(\'https://www.goodfreephotos.com/albums/united-states/wisconsin/southern-wisconsin/souther-wisconsin-pond-on-a-clear-day.jpg\')')          
            break;
        case 'Mist':
            $displayBody.css('backgroundImage', 'url(\'https://media.arubanetworks.com/blogs/GettyImages-1164051562-1024x683.jpg\')')          
            break;
        case 'Rain':
            $displayBody.css('backgroundImage', 'url(\'https://i.redd.it/ohq043q9y7t11.png\')')          
            break;
        case 'Snow':
            $displayBody.css('backgroundImage', 'url(\'https://i.imgur.com/6IKADES.jpg\')')          
            break;
        default:
            break;
    }
    
}

// Event listeners
$submit.on('click', handleWeather);

$inputField.on('keypress', function (e) {
    if (e.keyCode === 13) {
        $submit.click();
        $inputField.val('');
    }
})

$('.dropdown-trigger').dropdown();


/* 
To Do
- find another image that has images for all these cities. 
- Add a drop down that user can pick states from and modify the api call to include states
*/
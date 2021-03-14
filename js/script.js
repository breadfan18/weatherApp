$city = $('#city');
$temp = $('#temp');
$feelsLike = $('#feelsLike');
$weather = $('#weather');
$inputField = $('#input');
$submit = $('.waves-effect');
$displayBody = $('.displayBody');
$displayCard = $('.displayCard');
let userInput;

//images 
let sunny = '';

function getWeatherData() {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=8e0c596f2a6fd2d958d7bb12765da115`
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
    // $displayCard.css('display', 'flex');
    $city.text('Weather For: ' + weatherData.name);
    $temp.text('Temperature: ' + weatherData.main.temp);
    $feelsLike.text('Feels Like: ' + weatherData.main.feels_like);
    $weather.text('Weather: ' + weatherData.weather[0].main);
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
            $displayBody.css('backgroundImage', 'https://p0.piqsels.com/preview/147/363/745/clouds-cloudy-dark-dark-clouds.jpg')          
            break;
        case 'Clouds':
            $displayBody.css('backgroundImage', 'url(\'https://www.farmersalmanac.com/wp-content/uploads/2020/11/Clouds-Predict-Local-Weather-i861387936-1184x630.jpg\')')          
            break;
        case 'Clear':
            $displayBody.css('backgroundImage', 'url(\'https://www.goodfreephotos.com/albums/united-states/wisconsin/southern-wisconsin/souther-wisconsin-pond-on-a-clear-day.jpg\')')          
            break;
        case 'Cloudy':
            $displayBody.css('backgroundImage', 'https://p0.piqsels.com/preview/147/363/745/clouds-cloudy-dark-dark-clouds.jpg')          
            break;
        case 'Cloudy':
            $displayBody.css('backgroundImage', 'https://p0.piqsels.com/preview/147/363/745/clouds-cloudy-dark-dark-clouds.jpg')          
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


/* 
To Do
- find another image that has images for all these cities. 
- Add a drop down that user can pick states from and modify the api call to include states
*/
$city = $('#city');
$temp = $('#temp');
$feelsLike = $('#feelsLike');
$weather = $('#weather');
$inputField = $('#input');
$submit = $('#submitBtn');
let userInput;

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
    $city.text('Weather For: ' + weatherData.name);
    $temp.text('Temperature: ' + weatherData.main.temp);
    $feelsLike.text('Feels Like: ' + weatherData.main.feels_like);
    $weather.text('Weather: ' + weatherData.weather[0].main);
    // $img.src(movieData.Poster);
}

function handleWeather(e) {
    e.preventDefault();
    userInput = $inputField.val();
    getWeatherData();
    $inputField.val('');
}

// Event listeners
$submit.on('click', handleWeather);

$inputField.on('keypress', function (e) {
    if (e.keyCode === 13) {
        $submit.click();
        $inputField.val('');
    }
})
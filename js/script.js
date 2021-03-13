let userInput = 'dallas';

$.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=8e0c596f2a6fd2d958d7bb12765da115`
}).then(
    (data) => {
        console.log(data);
    },
    (error) => {
        console.log('error', error);
    }
)
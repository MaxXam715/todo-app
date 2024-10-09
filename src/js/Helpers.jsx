import axios from "axios";

// обновление времени
export function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var time = hours + ':' + minutes + ':' + seconds;

    return time;
}

export const fetchWeather = async () => {
    const city = "Moscow";
    const apiKey = "8a02d304172e41a0afc113301242905";
    let temperature;

    const getTemperature = await axios.request({
        method: 'GET',
        url: 'https://api.weatherapi.com/v1/current.json',
        params: {
            key: apiKey,
            q: city,
            lang: "ru",
        }
    });
    temperature = getTemperature.data.current.temp_c;

    if (temperature => 0) temperature = "+" + temperature;
    temperature = temperature + "°";

    return temperature;
};
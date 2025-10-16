import "./WeatherCard.css";
import cloudy from "../../assets/day/cloudy.png";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img src={cloudy} alt="cloudy" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;

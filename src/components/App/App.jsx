import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
import { coordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { defaultClothingItems } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleDeleteClick = (card) => {
    setActiveModal("delete-card");
    setSelectedCard(card);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const fiterData = filterWeatherData(data);
        setWeatherData(fiterData);
      })
      .catch(console.error);
  }, []);

  const onAddItem = (inputValues, handleReset) => {
    const newCardData = {
      name: inputValues.name,
      link: inputValues.link,
      weather: inputValues.weatherType,
    };
    setClothingItems([...clothingItems, newCardData]);
    handleReset({
      name: "",
      link: "",
      weather: "",
    });
    closeActiveModal();
  };

  return (
    <div className="page">
      <div className="page__content">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  handleAddClick={handleAddClick}
                />
              }
            />
          </Routes>
        </CurrentTemperatureUnitContext.Provider>
        <Footer />
      </div>
      <AddItemModal
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
        onAddItem={onAddItem}
      />
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        handleCloseClick={closeActiveModal}
        handleDeleteClick={handleDeleteClick}
      />
      <DeleteModal
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
      />
    </div>
  );
}

export default App;

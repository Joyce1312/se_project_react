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
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import { defaultCoordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { addItem, getItems, removeItem } from "../../utils/api.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

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
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const openConfirmationModal = (card) => {
    setActiveModal("delete-card");
    setSelectedCard(card);
  };

  const openRegisterModal = (card) => {
    setActiveModal("register");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  // latitude: 40.784743965856634;
  // longitude: -73.79662997019948;

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const userCoordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      //console.log(userCoordinates);
      getWeather(userCoordinates, APIkey)
        .then((data) => {
          const fiterData = filterWeatherData(data);
          setWeatherData(fiterData);
        })
        .catch(console.error);
    });

    getWeather(defaultCoordinates, APIkey)
      .then((data) => {
        const fiterData = filterWeatherData(data);
        setWeatherData(fiterData);
      })
      .catch(console.error);

    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  const onAddItem = (inputValues, handleReset) => {
    const newCardData = {
      name: inputValues.name,
      imageUrl: inputValues.imageUrl,
      weather: inputValues.weather,
    };
    addItem(newCardData)
      .then((data) => {
        setClothingItems([...clothingItems, data]);
        handleReset({
          name: "",
          imageUrl: "",
          weather: "",
        });
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleCardDelete = () => {
    removeItem(selectedCard._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => {
            return item._id !== selectedCard._id;
          })
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  return (
    <div className="page">
      <div className="page__content">
        {/* <CurrentUserContext.Provider value={currentUser}> */}
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            handleAddClick={handleAddClick}
            weatherData={weatherData}
            openRegisterModal={openRegisterModal}
          />
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
        {/* </CurrentUserContext.Provider> */}
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
        openConfirmationModal={openConfirmationModal}
      />
      <DeleteModal
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
        handleCardDelete={handleCardDelete}
      />
      <RegisterModal
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
      />
    </div>
  );
}

export default App;

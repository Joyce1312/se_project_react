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
import LoginModal from "../LoginModal/LoginModal.jsx";
import { defaultCoordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { addItem, getItems, removeItem } from "../../utils/api.js";
import { signUp, signIn, authorize } from "../../utils/auth.js";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const openLoginModal = (card) => {
    setActiveModal("login");
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

  const getUserData = (token) => {
    console.log("fire");
    if (token) {
      authorize(token)
        .then((user) => {
          console.log("auth: ", user);
          setIsLoggedIn(true);
          console.log("setting state");
          setCurrentUser(user);
        })
        .catch((err) => {
          console.error("Token validation failed", err);
          localStorage.removeItem("jwt");
        });
    }
  };

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

    const token = localStorage.getItem("jwt");

    getUserData(token);
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
          }),
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleRegistration = ({ email, password, name, avatar }) => {
    // avatar link: https://images.unsplash.com/photo-1556079337-a837a2d11f04?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9zdG9ufGVufDB8fDB8fHww
    //console.log("handleRegi", email);
    signUp({ email, password, name, avatar })
      .then((data) => {
        closeActiveModal();
        //console.log(data);
        return signIn({ email, password });
      })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        getUserData(res.token);
        // setIsLoggedIn(true);
        // setCurrentUser({ email, name, avatar });
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    signIn({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        console.log("res ", res);
        getUserData(res.token);
        closeActiveModal();
      })
      // .then((user) => {
      //   console.log("user:", user);
      //   setIsLoggedIn(true);
      //   setCurrentUser(user);
      //   closeActiveModal();
      // })
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
            openLoginModal={openLoginModal}
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
        handleRegistration={handleRegistration}
      />
      <LoginModal
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
        handleLogin={handleLogin}
      />
    </div>
  );
}

export default App;

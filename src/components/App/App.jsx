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
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import { defaultCoordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import {
  addItem,
  getItems,
  removeItem,
  likeItem,
  dislikeItem,
  updateUserInfo,
} from "../../utils/api.js";
import { signUp, signIn, authorize } from "../../utils/auth.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

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
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = localStorage.getItem("jwt");

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

  const openEditProfileModal = (card) => {
    setActiveModal("edit-profile");
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened((menuStatus) => {
      return !menuStatus;
    });
  };

  const getUserData = (token) => {
    if (token) {
      authorize(token)
        .then((user) => {
          setIsLoggedIn(true);
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

    getUserData(token);
  }, []);

  const onAddItem = (inputValues, handleReset) => {
    const newCardData = {
      name: inputValues.name,
      imageUrl: inputValues.imageUrl,
      weather: inputValues.weather,
    };
    addItem(token, newCardData)
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
    removeItem(token, selectedCard._id)
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

  const updateProfile = (inputValues) => {
    updateUserInfo(token, inputValues)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is not currently liked
    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        // the first argument is the card's id
        likeItem(token, id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item)),
            );
          })
          .catch(console.error)
      : // if not, send a request to remove the user's id from the card's likes array
        // the first argument is the card's id
        dislikeItem(token, id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item)),
            );
          })
          .catch(console.error);
  };

  const handleRegistration = (
    { email, password, name, avatar },
    handleReset,
  ) => {
    // avatar link: https://images.unsplash.com/photo-1556079337-a837a2d11f04?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9zdG9ufGVufDB8fDB8fHww
    signUp({ email, password, name, avatar })
      .then(() => {
        handleReset({
          email: "",
          password: "",
          name: "",
          avatar: "",
        });
        closeActiveModal();
        return signIn({ email, password });
      })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        getUserData(res.token);
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }, handleReset) => {
    signIn({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        getUserData(res.token);
        handleReset({
          email: "",
          password: "",
        });
        closeActiveModal();
      })
      .catch(console.error);
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider
        value={{ currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn }}
      >
        <div className="page__content">
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
                    onCardLike={handleCardLike}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile
                      handleCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                      openEditProfileModal={openEditProfileModal}
                      onCardLike={handleCardLike}
                    />
                  </ProtectedRoute>
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
          openLoginModal={openLoginModal}
        />
        <LoginModal
          activeModal={activeModal}
          handleCloseClick={closeActiveModal}
          handleLogin={handleLogin}
          openRegisterModal={openRegisterModal}
        />
        <EditProfileModal
          activeModal={activeModal}
          handleCloseClick={closeActiveModal}
          updateProfile={updateProfile}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

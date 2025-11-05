# Weather Wardrobe

Weather Wardrobe is a responsive React + Vite web application that recommends clothing items based on the current weather. The app dynamically displays temperature in °F/°C, filters clothing items by weather type, and lets users view, add, and delete items through interactive modals.

---

## Project Pitch Video

Check out [this video](https://drive.google.com/file/d/1o5AX2qeSVEDHHDR5Fna4BoMpqTvJpDC6/view?usp=sharing), where I describe my project.

## Project Description

Weather Wardrobe simulates a smart clothing-recommendation experience. It combines live weather data with a personalized wardrobe interface.

Users can:

- View the current temperature and weather conditions (°F/°C).
- See recommended clothing items filtered by weather type (hot, warm, cold).
- Open an item modal to preview an image and description.
- Add new items through the Add Clothes form modal.
- Delete items through the delete item form modal.
- Navigate between desktop and mobile views with a responsive header and mobile menu toggle.

---

## Technologies & Techniques Used

- **React (Vite)**: component-based architecture and fast dev environment
- **HTML5 / JSX**: semantic structure and dynamic rendering
- **CSS3**: Styling, responsive layout, and transitions
- **JavaScript (ES6+)**: component logic, hooks, and state management
- **Weather API**: fetch live temperature and weather data
- **Flexbox & CSS Grid**: responsive layout control
- **Media Queries**: For responsiveness across devices
- **SVG icons / assets**: For scalable, sharp user interface icons
- **BEM Methodology**: Clean and modular CSS naming convention

---

## API Integration

The app connects to a weather API to fetch live weather data: `https://openweathermap.org/`

---

## Screenshots

### Desktop View

![Homepage Desktop View](./src/assets/desktop/homepage.png)

![Add Garment Form Desktop View](./src/assets/desktop/add-garment-modal.png)

![Preview Garment Desktop View](./src/assets/desktop/item-preview-modal.png)

### Mobile View

![Homepage Mobile View](./src/assets/mobile/homepage.png)

![Hamburger menu](./src/assets/mobile/hamburger-menu.png)

![Add Garment Form Mobile View](./src/assets/mobile/add-garment-modal.png)

![Preview Garment Mobile View](./src/assets/mobile/item-preview-modal.png)

## Design Prototype

Weather Wardrobe was built iteratively across multiple sprints, each introducing new features.:

- **Sprint 10** – Vite setup & ESLint config; app file structure; core components (Header/Main/Footer/ModalWithForm/ItemModal/WeatherCard/ItemCard); fetch OpenWeather (city + temp °F) and show location in header; filter cards by weather from default data; responsive styles with BEM; modals open/close

  - 🎨 [Figma Sprint 10 Design](https://www.figma.com/design/F03bTb81Pw8IDPj5Y9rc5i/Sprint-10-Project--WTWR?node-id=311-433&p=f&t=w5G5AnhDa0BVgXXM-0)

- **Sprint 11** – Temperature unit toggle (°F/°C), React Router setup (/ & /profile), AddItemModal with useForm, delete confirmation modal, and full mock server API integration (GET, POST, DELETE)

  - 🎨 [Figma Sprint 11 Design](https://www.figma.com/design/dQLJwEKasIdspciJAJrCaf/Sprint-11_-WTWR?node-id=311-433&t=XpDngR6SbfDc2hGd-1)

---

## Live Demo

You can view the deployed project here:  
[Weather Wardrobe on GitHub Pages](https://joyce1312.github.io/se_project_react/)

---

## Author

By **Joyce Yeung**

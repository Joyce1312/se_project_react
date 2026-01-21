# Weather Wardrobe

Weather Wardrobe is a responsive full-stack React + Express application that recommends clothing items based on the current weather and allows authenticated users to manage their personal wardrobe. The app dynamically displays temperature in °F/°C, filters clothing items by weather type, and lets users view, add, like, and delete items through interactive modals.

---

## Project Pitch Video

Check out [this video](https://drive.google.com/file/d/1o5AX2qeSVEDHHDR5Fna4BoMpqTvJpDC6/view?usp=sharing), where I describe my project.

## Project Description

Weather Wardrobe simulates a smart clothing-recommendation experience. It combines live weather data with a personalized wardrobe interface.

Users can:

- View the current temperature and weather conditions (°F/°C).
- See recommended clothing items filtered by weather type (hot, warm, cold).
- Register, log in, and log out securely
- View and edit their profile (name & avatar)
- Like and unlike clothing items
- Open an item modal to preview an image and description.
- Add new items through the Add Clothes form modal.
- Delete items they own through the delete item form modal.
- Navigate between desktop and mobile views with a responsive header and mobile menu toggle.

Unauthorized users can browse items but **cannot** like, add, delete, or edit content.

---

## Authentication & Authorization

This project includes full authentication flow:

- User registration (`/signup`)
- User login (`/signin`)
- Token-based authorization using JWT
- Protected routes and API calls
- Persistent login via token validation (`/users/me`)
- Secure sign-out (JWT removed from localStorage)

---

## Key Features Implemented

### Full-Stack Integration

- React frontend communicates with Express backend
- MongoDB stores users and clothing items
- JWT protects sensitive routes and actions

### Current User Context

- Global `CurrentUserContext` stores user data
- Header, Profile, ItemModal, and ItemCard react to auth state
- Conditional UI for authorized vs unauthorized users

### Profile Editing

- Edit profile modal with prefilled user data
- Updates name and avatar via API
- UI updates automatically after state change

### Likes & Dislikes

- Authenticated users can like/unlike clothing items
- Like state persists in the database
- Like button hidden for unauthorized users
- Active state shown if user already liked an item

---

## Technologies & Techniques Used

### Frontend

- **React (Vite)**: component-based architecture and fast dev environment
- **React Router**: Client-side routing for navigation and protected routes
- **Context API**: Global state management for current user and auth status
- **Custom Hooks**: Reusable logic for form handling and state management
- **HTML5 / JSX**: semantic structure and dynamic rendering
- **CSS3**: Styling, responsive layout, and transitions
- **JavaScript (ES6+)**: component logic, hooks, and state management
- **Weather API**: fetch live temperature and weather data
- **Flexbox & CSS Grid**: responsive layout control
- **Media Queries**: For responsiveness across devices
- **SVG icons / assets**: For scalable, sharp user interface icons
- **BEM Methodology**: Clean and modular CSS naming convention

### Backend

- **Node.js**: JavaScript runtime for server-side logic
- **Express**: RESTful API framework for handling routes and middleware
- **MongoDB**: NoSQL database for storing users and clothing items
- **Mongoose**: Object Data Modeling (ODM) for MongoDB schemas and validation
- **JWT Authentication**: Secure token-based user authentication
- **Protected API Routes**: Middleware-enforced access control for authorized actions

### APIs

- **OpenWeather API** – live weather data  
  https://openweathermap.org/

---

## API Integration

The app connects to a weather API to fetch live weather data: `https://openweathermap.org/` and the frontend communicates with the backend via REST API calls.

### Public endpoints

- `POST /signup`
- `POST /signin`
- `GET /items`

### Protected endpoints (JWT required)

- `GET /users/me`
- `PATCH /users/me`
- `POST /items`
- `DELETE /items/:id`
- `PUT /items/:id/likes`
- `DELETE /items/:id/likes`

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

---

## Local Development Setup

To run the project locally, you must run both frontend and backend.

### Backend

npm install
npm run dev

- API requests are sent to `http://localhost:3001`

### Frontend

npm install
npm run dev

- Runs on `http://localhost:3000`

---

## Backend Repository

👉 **Backend Repository:**  
https://github.com/Joyce1312/se_project_express

---

## Design Prototype

Weather Wardrobe was built iteratively across multiple sprints, each introducing new features.:

- **Sprint 10** – Vite setup & ESLint config; app file structure; core components (Header/Main/Footer/ModalWithForm/ItemModal/WeatherCard/ItemCard); fetch OpenWeather (city + temp °F) and show location in header; filter cards by weather from default data; responsive styles with BEM; modals open/close
  - 🎨 [Figma Sprint 10 Design](https://www.figma.com/design/F03bTb81Pw8IDPj5Y9rc5i/Sprint-10-Project--WTWR?node-id=311-433&p=f&t=w5G5AnhDa0BVgXXM-0)

- **Sprint 11** – Temperature unit toggle (°F/°C), React Router setup (/ & /profile), AddItemModal with useForm, delete confirmation modal, and full mock server API integration (GET, POST, DELETE)
  - 🎨 [Figma Sprint 11 Design](https://www.figma.com/design/dQLJwEKasIdspciJAJrCaf/Sprint-11_-WTWR?node-id=311-433&t=XpDngR6SbfDc2hGd-1)

- **Sprint 12–13** – Express backend, MongoDB, authentication, protected routes

- **Sprint 14** – Full frontend–backend integration, user context, likes, profile editing
  - 🎨 [Figma Sprint 14 Design](https://www.figma.com/design/bfVOvqlLmoKZ5lpro8WWBe/Sprint-14_-WTWR?node-id=1-498&t=Lt9XOTkU3UzBz5mu-1)

---

## Live Demo

You can view the deployed project here:  
[Weather Wardrobe on GitHub Pages](https://joyce1312.github.io/se_project_react/)

---

## Author

By **Joyce Yeung**

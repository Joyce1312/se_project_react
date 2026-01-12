import { createContext } from "react";

// Stores user info that all components can use (Loggined in or not)
const CurrentUserContext = createContext();

export { CurrentUserContext };

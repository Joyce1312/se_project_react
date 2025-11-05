import { useContext, useState } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

export default function ToggleSwitch({ isMobileMenuOpened }) {
  const [checked, setChecked] = useState(false);
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  const handleChange = () => {
    setChecked(!checked);
    handleToggleSwitchChange();
  };
  return (
    <>
      <label
        htmlFor="toggle"
        className={`toggle-switch ${checked ? "toggle-switch_active" : ""} ${
          isMobileMenuOpened ? "toggle-switch_mobile" : ""
        }`}
        // {`header__add-clothes-btn ${
        //     isMobileMenuOpened ? "header__add-clothes-btn_active" : ""
        //   }`}
      >
        <input
          type="checkbox"
          className="toggle-switch__checkbox"
          id="toggle"
          checked={checked}
          onChange={handleChange}
        ></input>
        <span className="toggle-switch__circle"></span>

        <span
          className={`toggle-switch__text toggle-switch__text_F ${
            currentTemperatureUnit === "F" ? "toggle-switch__text_active" : ""
          }`}
        >
          F
        </span>
        <span
          className={`toggle-switch__text toggle-switch__text_C ${
            currentTemperatureUnit === "C" ? "toggle-switch__text_active" : ""
          }`}
        >
          C
        </span>
      </label>
    </>
  );
}

import { useState } from "react";
import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <label
        htmlFor="toggle"
        className={`toggle-switch ${checked ? "toggle-switch_active" : ""}`}
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
            checked ? "" : "toggle-switch__text_F-active"
          }`}
        >
          F
        </span>
        <span
          className={`toggle-switch__text toggle-switch__text_C ${
            checked ? "toggle-switch__text_C-active" : ""
          }`}
        >
          C
        </span>
        {/* <span className="toggle-switch__text toggle-switch__text_F">F</span>
        <span className="toggle-switch__text toggle-switch__text_C">C</span> */}
      </label>
    </>
  );
}

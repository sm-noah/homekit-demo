import React, { useState } from "react";
import roomImage from "./images/room.png";
import bathroomLightImage from "./images/Bathroom - Lights.png";
import diningHomepodImage from "./images/Dining - Homepod.png";
import diningLightImage from "./images/Dining - Lights.png";
import entryLightImage from "./images/Entry - Lights.png";
import kitchenHomepodImage from "./images/Kitchen - Homepod.png";
import kitchenLightImage from "./images/Kitchen - Lights.png";
import livingHomepodImage from "./images/Living - Homepod.png";
import livingLightImage from "./images/Living - Lights.png";
import livingLightBlindsImage from "./images/Living - Lights - Blinds.png";
import livingTVImage from "./images/Living - TV.png";
import livingBlindsImage from "./images/Living - Blinds.png";
import thermostatOnImage from "./images/Thermostat - On.png";
import thermostatOffImage from "./images/Thermostat - Off.png";
import ventImage from "./images/Vent.png";
import ventHeatImage from "./images/Vent - Heat.png";
import lockImage from "./images/Lock.png";
import "./App.css";

function App() {
  const items = [
    {
      name: "vent",
      style: { left: 705, top: 732, width: 59, height: 18, zIndex: 5, },
      image: ventImage,
      isStatic: true
    },
    {
      name: "ventHeat",
      style: { left: 559, top: 619, width: 352, height: 145, zIndex: 6, },
      image: ventHeatImage,
      isHidden: true
    },
    {
      name: "lock",
      style: { left: 612, top: 259, width: 39, height: 38, zIndex: 1, },
      image: lockImage
    },
    {
      name: "thermostatOn",
      style: { left: 543, top: 298, width: 18, height: 22, zIndex: 2, },
      image: thermostatOnImage,
      attached: ["ventHeat"]
    },
    {
      name: "thermostatOff",
      style: { left: 543, top: 298, width: 18, height: 22, zIndex: 1, },
      image: thermostatOffImage,
      isStatic: true
    },
    {
      name: "bathroomLight",
      style: { left: 334.5, top: 190, width: 217, height: 270, },
      image: bathroomLightImage
    },
    {
      name: "diningHomepod",
      style: { left: 893, top: 543, width: 119, height: 90.5, zIndex: 4, },
      image: diningHomepodImage
    },
    {
      name: "diningLight",
      style: { left: 707, top: 482, width: 456, height: 272, zIndex: 3, },
      image: diningLightImage
    },
    {
      name: "entryLight",
      style: { left: 528, top: 185, width: 156, height: 245, zIndex: 0, },
      image: entryLightImage
    },
    {
      name: "kitchenHomepod",
      style: { left: 504, top: 459, width: 118, height: 84, zIndex: 2, },
      image: kitchenHomepodImage
    },
    {
      name: "kitchenLight",
      style: { left: 246, top: 451, width: 521, height: 312, },
      image: kitchenLightImage
    },
    {
      name: "livingHomepod",
      style: (state) => ({ left: 915, top: 376.5, width: 119, height: 77, zIndex: 4, opacity: state['livingTV'] ? 0.5 : 1 }),
      styleDynamic: true,
      image: livingHomepodImage
    },
    {
      name: "livingLight",
      style: { left: 757, top: 190, width: 212, height: 252, zIndex: 2, },
      image: (state) => state['livingBlinds'] ? livingLightBlindsImage : livingLightImage,
      imageDynamic: true
    },
    {
      name: "livingTV",
      style: { left: 849, top: 280, width: 237, height: 236, zIndex: 3 },
      image: livingTVImage
    },
    {
      name: "livingBlinds",
      style: { left: 793, top: 201, width: 271, height: 145, zIndex: 0, },
      image: livingBlindsImage,
    },
  ];

  const initialState = items.reduce((obj, cur) => ({...obj, [cur.name]: false}), {})
  const [isOn, setIsOn] = useState(initialState)
  const toggle = (item) => {
    const names = [item.name, ...item.attached || []];
    const stateUpdate = {};

    names.map(name => stateUpdate[name] = !isOn[name])
    setIsOn({ ...isOn, ...stateUpdate });
  }

  return (
    <>
    <div
      className="flex justify-center items-center relative h-screen"
      style={{ backgroundColor: "#D4D4D4" }}
    >
      <button className="absolute right-0 top-0 mt-10 mr-10 z-10" onClick={() => setIsOn(initialState)}>Reset</button>
      <div className="relative">
        <img src={roomImage} alt="room" style={{ width: 1383, height: 949 }} />
        {items.map((item, key) => (
            <div
              key={key}
              className="absolute cursor-pointer group"
              style={item.styleDynamic ? item.style(isOn) : item.style}
              onClick={!item.isStatic ? () => toggle(item) : null}
            >
              <img src={item.imageDynamic ? item.image(isOn) : item.image} alt={item.name} className={`${isOn[item.name] || item.isStatic ? "opacity-100" : `${item.isHidden ? "opacity-0" : "opacity-0 group-hover:opacity-25 transition duration-200"}`}`} width="100%" />
            </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;

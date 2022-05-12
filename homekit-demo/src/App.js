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
import livingTVImage from "./images/Living - TV.png";
import "./App.css";

function App() {
  const items = [
    {
      name: "bathroomLight",
      style: { left: 334.5, top: 190, width: 217, height: 270, },
      image: bathroomLightImage
    },
    {
      name: "diningHomepod",
      style: { left: 893, top: 543, width: 119, height: 90.5, zIndex: 2, },
      image: diningHomepodImage
    },
    {
      name: "diningLight",
      style: { left: 707, top: 482, width: 456, height: 272, },
      image: diningLightImage
    },
    {
      name: "entryLight",
      style: { left: 528, top: 185, width: 156, height: 245, },
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
      style: { left: 915, top: 376.5, width: 119, height: 77, zIndex: 2, },
      image: livingHomepodImage
    },
    {
      name: "livingLight",
      style: { left: 757, top: 190, width: 212, height: 252, },
      image: livingLightImage
    },
    {
      name: "livingTV",
      style: { left: 849, top: 280, width: 237, height: 236, },
      image: livingTVImage
    },
  ];

  const initialState = items.reduce((obj, cur) => ({...obj, [cur.name]: false}), {})
  const [isOn, setIsOn] = useState(initialState)
  const toggle = (item) => {
    setIsOn({ ...isOn, [item]: !isOn[item] });
  }

  return (
    <div
      className="flex justify-center items-center relative h-screen"
      style={{ backgroundColor: "#D4D4D4" }}
    >
      <div className="relative">
        <img src={roomImage} alt="room" style={{ width: 1383, height: 949 }} />
        {items.map((item, key) => (
          <div
            key={key}
            className="absolute cursor-pointer"
            style={item.style}
            onClick={() => toggle(item.name)}
          >
            {isOn[item.name] && (
              <img src={item.image} alt={item.name} width="100%" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

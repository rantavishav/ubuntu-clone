import React, { useEffect, useState } from "react";
import BootingScreen from "./bootingScreen";
import Desktop from "./desktop";
import LockScreen from "./lockScreen";
import Navbar from "./navbar";

import wallpapers from "../images/wallpapers/wall-1.webp";

const Ubuntu = () => {
  const [isBootScreenVisible, setIsBootScreenVisible] = useState(true);
  const [isShutDown, setIsShutDown] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [bgImage, setBgImage] = useState(wallpapers);

  const handleShutDown = () => {
    localStorage.setItem("shut-down", "true");
    localStorage.setItem("boot-screen", "true");
    setIsShutDown(true);
    setIsBootScreenVisible(true);
  };

  const changeBackgroundImage = (imgName: string) => {};

  const handleRemoveBootScreen = () => {
    localStorage.removeItem("shut-down");
    localStorage.removeItem("boot-screen");
    setIsShutDown(false);
    setTimeout(() => {
      setIsBootScreenVisible(false);
    }, 1000);
  };

  const handelLockClick = () => {
    localStorage.setItem("lock-screen", "true");
    setIsLocked(true);
  };

  const handelRemoveLockScreen = () => {
    localStorage.removeItem("lock-screen");
    setIsLocked(false);
  };

  useEffect(() => {
    if (localStorage.getItem("shut-down") === "true") {
      setIsShutDown(true);
    } else if (localStorage.getItem("lock-screen") === "true") {
      setIsBootScreenVisible(false);
      setIsLocked(true);
    } else {
      setTimeout(() => {
        setIsBootScreenVisible(false);
      }, 1000);
    }
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden" id="monitor-screen">
      <BootingScreen
        isVisible={isBootScreenVisible}
        turnOn={handleRemoveBootScreen}
        isShutDown={isShutDown}
      />
      <LockScreen
        isLocked={isLocked}
        handelRemoveLockScreen={handelRemoveLockScreen}
        bgImgName={bgImage}
      />
      <Navbar lockScreen={handelLockClick} shutDown={handleShutDown} />
      <Desktop
        bgImage={bgImage}
        changeBackgroundImage={changeBackgroundImage}
      />
    </div>
  );
};

export default Ubuntu;

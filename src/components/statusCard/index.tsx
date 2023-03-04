import {
  AUDIO_HEADPHONES_SYMBOLIC_SVG,
  BATTERY_GOOD_SYMBOLIC_SVG,
  BLUETOOTH_SYMBOLIC_SVG,
  CHANGES_PREVENT_SYMBOLIC_SVG,
  DISPLAY_BRIGHTNESS_SYMBOLIC_SVG,
  EMBLEM_SYSTEM_SYMBOLIC_SVG,
  NETWORK_WIRELESS_SIGNAL_GOOD_SYMBOLIC_SVG,
  SYSTEM_SHUTDOWN_SYMBOLIC_SVG,
} from "@/images";
import { isSSR } from "@/utils/isSSR";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Arrow from "../arrow";
import Slider from "./Slider";

interface IStatusCardProps {
  visible: boolean;
  lockScreen: () => void;
  shutDown: () => void;
  onClickOutside: () => void;
  statusRef: React.MutableRefObject<HTMLDivElement>;
}

const StatusCard = ({
  visible,
  lockScreen,
  shutDown,
  onClickOutside,
  statusRef,
}: IStatusCardProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [soundLevel, setSoundLevel] = useState<number | string>(50);
  const [brightnessLevel, setBrightnessLevel] = useState<number | string>(50);

  const handleBrightness = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrightnessLevel(e.target.value);
    localStorage.setItem("brightness-level", e.target.value);
    // the function below inside brightness() is derived from a linear equation such that at 0 value of slider brightness still remains 0.25 so that it doesn't turn black.
    if (!isSSR) {
      const mainRoot = document.getElementById("monitor-screen");
      if (mainRoot)
        mainRoot.style.filter = `brightness(${
          (3 / 400) * parseInt(e.target.value) + 0.25
        })`; // Using css filter to adjust the brightness in the root div.
    }
  };

  const handleSound = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSoundLevel(e.target.value);
    localStorage.setItem("sound-level", e.target.value);
  };

  useEffect(() => {
    setSoundLevel(localStorage.getItem("sound-level") || 75);
    setBrightnessLevel(localStorage.getItem("brightness-level") || 75);

    if (!isSSR) {
      const mainRoot = document.getElementById("monitor-screen");
      if (mainRoot)
        mainRoot.style.filter = `brightness(${
          (3 / 400) *
            parseInt(localStorage.getItem("brightness-level") || "75") +
          0.25
        })`; // Using css filter to adjust the brightness in the root div.
    }
  }, []);

  useEffect(() => {
    // check if click outside of the status card
    const handleClickOutside = (event: any) => {
      if (statusRef.current && !statusRef.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <div
      ref={wrapperRef}
      className={
        "absolute bg-ub-cool-grey rounded-md py-4 top-9 right-3 shadow border-black border border-opacity-20 status-card" +
        (visible ? " visible animateShow" : " invisible")
      }
    >
      {" "}
      {/* Status Card */}
      <div className="absolute w-0 h-0 -top-1 right-6 top-arrow-up" />
      <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
        <div className="w-8">
          <Image
            width={16}
            height={16}
            src={AUDIO_HEADPHONES_SYMBOLIC_SVG}
            alt="ubuntu headphone"
          />
        </div>
        <Slider
          onChange={handleSound}
          className="ubuntu-slider w-2/3"
          value={soundLevel}
          name="headphone_range"
        />
      </div>
      <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
        <div className="w-8">
          <Image
            width={16}
            height={16}
            src={DISPLAY_BRIGHTNESS_SYMBOLIC_SVG}
            alt="ubuntu brightness"
          />
        </div>
        <Slider
          onChange={handleBrightness}
          className="ubuntu-slider w-2/3"
          name="brightness_range"
          value={brightnessLevel}
        />
      </div>
      <div className="w-64 flex content-center justify-center">
        <div className="w-2/4 border-black border-opacity-50 border-b my-2 border-solid" />
      </div>
      <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
        <div className="w-8">
          <Image
            width={16}
            height={16}
            src={NETWORK_WIRELESS_SIGNAL_GOOD_SYMBOLIC_SVG}
            alt="ubuntu wifi"
          />
        </div>
        <div className="w-2/3 flex items-center justify-between text-gray-400">
          <span>OnePlus 8 Pro</span>
          <Arrow angle="right" />
        </div>
      </div>
      <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
        <div className="w-8">
          <Image
            width={16}
            height={16}
            src={BLUETOOTH_SYMBOLIC_SVG}
            alt="ubuntu bluetooth"
          />
        </div>
        <div className="w-2/3 flex items-center justify-between text-gray-400">
          <span>Off</span>
          <Arrow angle="right" />
        </div>
      </div>
      <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
        <div className="w-8">
          <Image
            width={16}
            height={16}
            src={BATTERY_GOOD_SYMBOLIC_SVG}
            alt="ubuntu battery"
          />
        </div>
        <div className="w-2/3 flex items-center justify-between text-gray-400">
          <span>2:40 Remaining (75%)</span>
          <Arrow angle="right" />
        </div>
      </div>
      <div className="w-64 flex content-center justify-center">
        <div className="w-2/4 border-black border-opacity-50 border-b my-2 border-solid" />
      </div>
      <div
        id="open-settings"
        className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20"
      >
        <div className="w-8">
          <Image
            width={16}
            height={16}
            src={EMBLEM_SYSTEM_SYMBOLIC_SVG}
            alt="ubuntu settings"
          />
        </div>
        <div className="w-2/3 flex items-center justify-between">
          <span>Settings</span>
        </div>
      </div>
      <div
        onClick={lockScreen}
        className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20"
      >
        <div className="w-8">
          <Image
            width={16}
            height={16}
            src={CHANGES_PREVENT_SYMBOLIC_SVG}
            alt="ubuntu lock"
          />
        </div>
        <div className="w-2/3 flex items-center justify-between">
          <span>Lock</span>
        </div>
      </div>
      <div
        onClick={shutDown}
        className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20"
      >
        <div className="w-8">
          <Image
            width={16}
            height={16}
            src={SYSTEM_SHUTDOWN_SYMBOLIC_SVG}
            alt="ubuntu power"
          />
        </div>
        <div className="w-2/3 flex items-center justify-between">
          <span>Power Off / Log Out</span>
          <Arrow angle="right" />
        </div>
      </div>
    </div>
  );
};

export default StatusCard;

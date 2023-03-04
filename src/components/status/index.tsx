import Image from "next/image";
import React from "react";
import {
  AUDIO_VOLUME_MEDIUM_SYMBOLIC_SVG,
  BATTERY_GOOD_SYMBOLIC_SVG,
  NETWORK_WIRELESS_SIGNAL_GOOD_SYMBOLIC_SVG,
} from "@/images";
import Arrow from "../arrow";

const Status = () => (
  <div className="flex justify-center items-center">
    <span className="mx-1.5">
      <Image
        width={16}
        height={16}
        src={NETWORK_WIRELESS_SIGNAL_GOOD_SYMBOLIC_SVG}
        alt="ubuntu wifi"
        className="inline status-symbol w-4 h-4"
      />
    </span>
    <span className="mx-1.5">
      <Image
        width={16}
        height={16}
        src={AUDIO_VOLUME_MEDIUM_SYMBOLIC_SVG}
        alt="ubuntu sound"
        className="inline status-symbol w-4 h-4"
      />
    </span>
    <span className="mx-1.5">
      <Image
        width={16}
        height={16}
        src={BATTERY_GOOD_SYMBOLIC_SVG}
        alt="ubuntu battry"
        className="inline status-symbol w-4 h-4"
      />
    </span>
    <span className="mx-1">
      <Arrow angle="down" className=" status-symbol" />
    </span>
  </div>
);

export default Status;

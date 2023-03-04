import { useEffect, useState } from "react";

const MONTH_LIST = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DAY_LIST = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Clock = ({ onlyTime, onlyDay }: any) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHour12, setIsHour12] = useState(true);

  let day = DAY_LIST[currentTime.getDay()];
  let hour = currentTime.getHours();
  let minute: string | number = currentTime.getMinutes();
  let month = MONTH_LIST[currentTime.getMonth()];
  let date = currentTime.getDate().toLocaleString();
  let meridiem = hour < 12 ? "AM" : "PM";

  if (minute.toLocaleString().length === 1) {
    minute = "0" + minute;
  }

  if (isHour12 && hour > 12) hour -= 12;

  let display_time;
  if (onlyTime) {
    display_time = hour + ":" + minute + " " + meridiem;
  } else if (onlyDay) {
    display_time = day + " " + month + " " + date;
  } else {
    display_time =
      day +
      " " +
      month +
      " " +
      date +
      " " +
      hour +
      ":" +
      minute +
      " " +
      meridiem;
  }

  useEffect(() => {
    const updatedTime = setInterval(() => {
      setCurrentTime(new Date());
    }, 10 * 1000);

    return () => clearInterval(updatedTime);
  }, []);

  return <span>{display_time}</span>;
};

export default Clock;

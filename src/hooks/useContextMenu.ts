import { useState, useEffect } from "react";

const useContextMenu = () => {
  const [clicked, setClicked] = useState(false);
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleClick = () => setClicked(false);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const getMenuPosition = (e: any) => {
    var posx = 0;
    var posy = 0;

    if (!e) e = window.event;

    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    return {
      posx,
      posy,
    };
  };

  const handleOpenContextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();

    //  check if menu going out of screen
    let { posx, posy } = getMenuPosition(e);
    const contextMenu = document.getElementById("default-menu");

    if (contextMenu) {
      const { clientWidth, clientHeight } = contextMenu;
      const { innerWidth, innerHeight } = window;

      if (posx + clientWidth > innerWidth) {
        posx -= clientWidth;
      }

      if (posy + clientHeight > innerHeight) {
        posy -= clientHeight;
      }

      setClicked(true);
      setPoints({
        x: posx,
        y: posy,
      });
    }
  };

  return {
    clicked,
    setClicked,
    points,
    setPoints,
    handleOpenContextMenu,
  };
};

export default useContextMenu;

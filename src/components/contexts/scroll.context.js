import { React, createContext, useState, useEffect } from "react";

export const ScrollEventContext = createContext();

export function ScrollEventProvider({ children }) {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    const { id } = children.props;
    const scroll = (e) => {
      const el = document.querySelector(`#${id}`);
      const { documentElement } = e.target;
      if (documentElement.scrollTop > el.offsetHeight) {
        setScrolled(true);
      } else setScrolled(false);
    };
    //add event listeners
    document.addEventListener("scroll", scroll, true);
    //clean up function, remove event listener
    return () => {
      document.removeEventListener("scroll", scroll, true);
    };
  });
  return (
    <ScrollEventContext.Provider value={{ isScrolled, setScrolled }}>
      {children}
    </ScrollEventContext.Provider>
  );
}

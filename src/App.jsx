import { useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar"; // import the Navbar component
import Mainbody from "./components/mainbody/mainbody";

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScrollPosition(window.scrollY);
      });
    };
  }, []);
  return (
    <>
      <div className="body-container">
        <Navbar scrollPosition={scrollPosition} />
        <Mainbody />
      </div>
    </>
  );
}

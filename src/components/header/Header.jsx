import "./Header.css";
import logo from "../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCars } from "../../features/car/carSlice";

const Header = () => {
  const [show, setShow] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <div className="header">
      <a href="/#">
        <img src={logo} alt="logo" />
      </a>
      <div className="menu">
        {cars &&
          cars.map((car, index) => (
            <a href={`#${car.id}`} key={index}>
              {car.model}
            </a>
          ))}
      </div>
      <div className="right-menu">
        <a href="#model-s">shop</a>
        <a href="#model-3">Tesla Account</a>
        <FaBars className="menu-icon" onClick={() => setShow(true)} />
      </div>

      <div className={`burger-nav ${show ? "show" : "hide"}`}>
        <div className="custom-close">
          <AiOutlineClose onClick={() => setShow(false)} />
        </div>
        {cars &&
          cars.map((car, index) => (
            <li>
          <a href={`#${car.id}`} key={index}>{car.model}</a>
        </li>
          ))}
        <li>
          <a href="/">Existing Inventory</a>
        </li>
        <li>
          <a href="/">Used Inventory</a>
        </li>
        <li>
          <a href="/">Trade-in</a>
        </li>
        <li>
          <a href="/">Cyberytruck</a>
        </li>
        <li>
          <a href="/">Roadster</a>
        </li>
        <li>
          <a href="/">Semi</a>
        </li>
        <li>
          <a href="/">Charging</a>
        </li>
      </div>
    </div>
  );
};

export default Header;

  
// import React, { useState } from "react";
// import { FaBars, FaReact } from "react-icons/fa";
// import { HiX } from "react-icons/hi";
// import { Link } from "react-router-dom";
// import "./style.scss";

// const data = [
//   { label: "HOME", to: "/" },
//   { label: "ABOUT ME", to: "/about" },
//   { label: "SKILLS", to: "/skills" },
//   { label: "RESUME", to: "/resume" },
//   { label: "PORTFOLIO", to: "/portfolio" },
//   { label: "CONTACT", to: "/contact" },
// ];

// const Navbar = () => {
//   const [toggleIcon, setToggleIcon] = useState(false);

//   const handleToggleIcon = () => {
//     setToggleIcon(!toggleIcon);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar__container">
//         <Link to={"/"} className="navbar__container__logo">
//           <FaReact size={30} />
//         </Link>

//         <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
//           {data.map((item, key) => (
//             <li key={key} className="navbar__container__menu__item">
//               <Link
//                 className="navbar__container__menu__item__links"
//                 to={item.to}
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <div className="nav-icon" onClick={handleToggleIcon}>
//           {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.scss";

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "RESUME", to: "/resume" },
  { label: "PORTFOLIO", to: "/portfolio" },
  { label: "CONTACT", to: "/contact" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleMenuClick = () => {
    setToggleIcon(false); // Close the menu when an item is clicked
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to={"/"} className="navbar__container__logo" onClick={handleMenuClick}>
          <FaReact size={30} />
        </Link>

        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={handleMenuClick} // Close the menu on link click
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

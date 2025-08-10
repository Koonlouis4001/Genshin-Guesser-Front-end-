import fullLogo from "~/image/fullLogo.png";
import menu from "~/image/menu.png";
import { useState } from "react";
import { useNavigate } from "react-router";

export function Header() {

  const [menuMode, setMenuMode] = useState(false);
  const navigate = useNavigate();  
  return (  
    <header className="header">
        <div className="header_logo">
          <img
            src={fullLogo}
            alt="Genshin Guessor"
            className="block h-full"
          />
        </div>
        <img
          src={menu}
          alt="Menu"
          className="header_menu"
          onClick={() => setMenuMode((prev) => !prev)}
        />
        {menuMode && (
          <div className="dropdown">
            <div
              className="pointer"
              onClick={() => navigate("/")}
            >
              DAILY
            </div>
            <div
              className="pointer"
              onClick={() => navigate("/endless")}
            >
              ENDLESS
            </div>
          </div>
        )}
      </header>
    );
}
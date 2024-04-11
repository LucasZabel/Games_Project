import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [toggleBtn, setToggleBtn] = useState("bi-list")

    const handleToggle = () => {
        setMenuOpen(!menuOpen);

        if (toggleBtn === "bi-list") {
            setToggleBtn("bi-x");
        } else {
            setToggleBtn("bi-list");
        };
    };


    return (
        <>
            <div className="spacing"></div>
            <nav className="navbar">
                <div className="divisory">
                    <NavLink to="/" className="brand">
                        <i className="bi bi-controller showed"><span> Games Project</span></i>
                    </NavLink>
                    <button className="navbar_toggle brand" onClick={handleToggle}>
                        <i className={`bi ${toggleBtn} showed`}></i>
                    </button>
                </div>
                <div className={`main_options ${menuOpen ? "active anim_on" : ""}`}>
                    <NavLink onClick={handleToggle} to="/" className={`brand ${menuOpen ? "" : "hide"}`}>
                        <i className={`bi bi-house toggle_options ${menuOpen ? "" : "hide"}`}><span> Início</span></i>
                    </NavLink>
                    <NavLink onClick={handleToggle} to="/find-out-numbers" className={`brand ${menuOpen ? "" : "hide"}`}>
                        <i className={`bi bi-123 toggle_options ${menuOpen ? "" : "hide"}`}><span> Find Out Numbers</span></i>
                    </NavLink>
                    <NavLink onClick={handleToggle} to="/find-out-letters" className={`brand ${menuOpen ? "" : "hide"}`}>
                        <i className={`bi bi-alphabet-uppercase toggle_options ${menuOpen ? "" : "hide"}`}><span> Find Out Letters</span></i>
                    </NavLink>
                    <div className={`brand ${menuOpen ? "" : "hide"}`} onClick={handleToggle}>
                        <i className={`bi bi-door-closed toggle_options ${menuOpen ? "" : "hide"}`}><span> Fechar</span></i>
                    </div>
                </div>
                <div className="underline_navbar"></div>
            </nav >
        </>
    );
};

export default NavBar;
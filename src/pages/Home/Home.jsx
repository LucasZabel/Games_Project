import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {

    return (
        <div className="home">
            <h1>Escolha o jogo</h1>
            <div className="gm_cntnr">
                <NavLink className="bx nmbrs txt_cd" to="/find-out-numbers">
                    <i className="bi bi-123"></i>
                    <span> Find Out Numbers</span>
                </NavLink>
                <NavLink className="bx lttrs txt_cd" to="/find-out-letters">
                    <i className="bi bi-alphabet-uppercase "></i>
                    <span> Find Out Letters</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Home;
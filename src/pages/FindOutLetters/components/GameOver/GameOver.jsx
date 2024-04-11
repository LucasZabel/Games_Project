import "./GameOver.css";

const GameOver = ({ retry, score }) => {

    return (
        <div className="gameover">
            <h1>Game Over!</h1>
            <h2>Pontuação: <span>{score}</span></h2>
            <button onClick={retry}>Reiniciar</button>
        </div>
    );
};

export default GameOver;
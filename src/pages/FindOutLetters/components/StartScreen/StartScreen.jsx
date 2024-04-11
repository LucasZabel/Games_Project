import "./StartScreen.css";

const StartScreen = ({ startGame }) => {

    return (
        <div className="start">
            <h1>Start the game</h1>
            <button onClick={startGame}>Press to start</button>
        </div>
    );
};

export default StartScreen;
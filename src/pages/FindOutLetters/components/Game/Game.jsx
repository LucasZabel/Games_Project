import { useRef, useState } from "react";
import "./Game.css";

const Game = ({ verifyLetter, selectedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {

    const [letter, setLetter] = useState("");
    const letterInputRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        verifyLetter(letter.toLowerCase());
        setLetter("");
        letterInputRef.current.focus();
    };

    return (
        <div className="gm_fol">
            <p className="status"><span>Pontuação: {score}</span> <span>Tentativas: {guesses}</span></p>
            <div className="txt">
                <h2>Adivinhe a palavra:</h2>
                <span>Dica sobre a palavra:</span>
                <span>{selectedCategory.toUpperCase()}</span>
            </div>
            <div className="word_cntnr">
                {letters.map((letter, i) => (
                    guessedLetters.includes(letter) ?
                        (
                            <span key={i} className="letter">{letter.toUpperCase()}</span>
                        ) : (
                            <span key={i} className="blankSquare"></span>
                        )
                ))}
            </div>
            <div>
                <form className="gm_inpt_cntnr" onSubmit={handleSubmit}>
                    <p className="txt">Tente adivinhar uma letra da palavra:</p>
                    <input
                        className="gm_inpt"
                        autocomplete="off"
                        type="text"
                        name="letter"
                        maxLength={1}
                        value={letter}
                        onChange={(e) => setLetter(e.target.value)}
                        ref={letterInputRef}
                        required
                    />
                    <button type="submit">JOGAR</button>
                </form>
            </div>
            <div className="gm_wrng_cntnr">
                <p>Letras já utilizadas:</p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter.toUpperCase()}</span>
                ))}
            </div>
        </div>
    );
};

export default Game;
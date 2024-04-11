import "./FindOutLetters.css";
import { useCallback, useEffect, useState } from "react";
import { wordsList } from './data/words';
import StartScreen from "./components/StartScreen/StartScreen";
import Game from "./components/Game/Game";
import GameOver from "./components/GameOver/GameOver";

const FindOutLetters = () => {

    const [gameStage, setGameStage] = useState("start");
    const [score, setScore] = useState(0);
    const quantityGuesses = 3;
    const [guesses, setGuesses] = useState(quantityGuesses);
    const [words] = useState(wordsList);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedWord, setSelectedWord] = useState("");
    const [letters, setLetters] = useState([]);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);

    const selectWordAndCategory = useCallback(() => {
        const category = Object.keys(words)[Math.floor(Math.random() * Object.keys(Object.keys(words)).length)];
        const word = words[category][Math.floor(Math.random() * words[category].length)];
        return { word, category };
    }, [words]);

    const clearLetterStates = () => {
        setGuessedLetters([]);
        setWrongLetters([]);
    };

    const startGame = useCallback(() => {
        clearLetterStates();
        const { word, category } = selectWordAndCategory();
        let wordLetters = word.split("").map((letter) => letter.toLowerCase());

        setSelectedCategory(category);
        setSelectedWord(word);
        setLetters(wordLetters);
        setGameStage("game");
    }, [selectWordAndCategory]);


    const verifyLetter = (letter) => {
        if (guessedLetters.includes(letter.toLowerCase()) || wrongLetters.includes(letter.toLowerCase())) {
            return;
        } else if (letters.includes(letter.toLowerCase())) {
            setGuessedLetters([...guessedLetters, letter.toLowerCase()]);
        } else {
            setWrongLetters([...wrongLetters, letter.toLowerCase()]);
            setGuesses(guesses - 1);
        };
    };

    useEffect(() => {
        if (guesses <= 0) {
            clearLetterStates();
            setGameStage("end");
        };
    }, [guesses]);

    useEffect(() => {
        const uniqueLetters = [...new Set(letters)];
        if (guessedLetters.length === uniqueLetters.length && gameStage === "game") {
            setScore(score + 100);
            startGame();
        };
    }, [guessedLetters, letters, startGame]);

    const retry = () => {
        setScore(0);
        setGuesses(quantityGuesses);
        setGameStage("start");
    };


    return (
        <div className="find_out_letters">
            <h2 className="title">Find Out the Word Game</h2>
            <div className="fol_box">
                {gameStage === "start" && <StartScreen startGame={startGame} />}

                {gameStage === "game" && <Game
                    verifyLetter={verifyLetter}
                    selectedCategory={selectedCategory}
                    letters={letters}
                    guessedLetters={guessedLetters}
                    wrongLetters={wrongLetters}
                    guesses={guesses}
                    score={score}
                />}

                {gameStage === "end" && <GameOver retry={retry} score={score} />}
            </div>
        </div>
    );
};

export default FindOutLetters;
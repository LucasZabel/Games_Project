import { useEffect, useState } from 'react';
import './FindOutNumber.css';

function FindOutNumber() {

    const [randomNumber, setRandomNumber] = useState(null);
    const [trySlot, setTrySlot] = useState(null);
    const [tryNumber, setTryNumber] = useState(0);
    const [attempts, setAttempts] = useState(10);
    const [score, setScore] = useState(0);
    const [triedNumbers, setTriedNumbers] = useState();
    const [error, setError] = useState(null);
    const [state, setState] = useState((<><h2>Carregando...</h2></>));

    const randomize = () => {
        setRandomNumber(Math.floor(Math.random() * 51));
        setTryNumber(null);
        setAttempts(10);
        setTriedNumbers([]);
        setError(null);
        setScore(0);
    };

    const nextNumber = () => {
        setRandomNumber(Math.floor(Math.random() * 51));
        setTryNumber(null);
        setAttempts(10);
        setTriedNumbers([]);
        setError(null);
    };

    const handleTry = () => {
        if (trySlot == null) {
            setError("Coloque um número!");
        } else if (triedNumbers.includes(trySlot)) {
            setError("Você já tentou esse número!");
        } else if (trySlot == randomNumber) {
            setTryNumber(trySlot);
            setAttempts(attempts - 1);
            setScore(score + attempts);
        } else if (trySlot >= 0 & trySlot <= 50) {
            setTryNumber(trySlot);
            setAttempts(attempts - 1);
            setError("Tente outro número!");
            setTriedNumbers([...triedNumbers, trySlot]);
        } else {
            setError("Número inválido! Tente de 0 a 50.")
        };
    };


    useEffect(() => {
        if (randomNumber === null) {
            setState(
                <>
                    <h2 className='box_title text_shadow'>Começar o jogo.</h2>
                    <div onClick={randomize} className='buttonBox'>
                        <button className='button'>Começar</button>
                        <div className="border"></div>
                        <div className="border"></div>
                    </div>
                </>
            );
        } else if (attempts == 0) {
            setState(
                <>
                    <h2 className='box_title text_shadow'>Suas tentativas acabaram!</h2>
                    <p className='text_shadow'>Você fez {score} pontos.</p>
                    <div onClick={randomize} className='buttonBox'>
                        <button className='button'>Tentar outra vez</button>
                        <div className="border"></div>
                        <div className="border"></div>
                    </div>
                </>
            );
        } else if (randomNumber == tryNumber) {
            setState(
                <>
                    <h2 className='box_title text_shadow'>Parabéns!</h2>
                    <p className='text_shadow'>Você acertou o número: {randomNumber}!</p>
                    <p className='text_shadow'>Sua pontuação é: {score}</p>
                    <div onClick={nextNumber} className='buttonBox'>
                        <button className='button'>Continuar jogando</button>
                        <div className="border"></div>
                        <div className="border"></div>
                    </div>
                </>
            );
        } else {
            setState(
                <>
                    <div className='score_div'>
                        <p className='score_children'>Pontuação: {score}</p>
                        <p className='score_children'>Tentativas: {attempts}</p>
                    </div>
                    <h3 className='box_title'>Tente um número:</h3>
                    <input
                        className='input'
                        type="number"
                        placeholder='Nºs de 0 a 50'
                        onChange={(e) => setTrySlot(e.target.value)}
                    />
                    <div onClick={handleTry} className='buttonBox'>
                        <button className='button'>Enviar</button>
                        <div className="border"></div>
                        <div className="border"></div>
                    </div>
                    <p className='text_shadow'>{error ? error : "Tente um número!"}</p>
                    <div className='triedNumbersBox'>
                        <p>Números já jogados: </p>
                        <p className='triedNumbers'>{triedNumbers && triedNumbers.map((number) => {
                            return (<p> {number} é {number > randomNumber ? "maior" : "menor"}.</p>)
                        })}</p>
                    </div>

                </>
            );
        };
    }, [
        trySlot,
        tryNumber,
        randomNumber,
        triedNumbers,
        attempts,
        error,
        score
    ]);

    return (
        <div className='body'>
            <h1>Find Out the Number</h1>
            <div className='container'>{state}</div>
        </div>
    );
};

export default FindOutNumber;

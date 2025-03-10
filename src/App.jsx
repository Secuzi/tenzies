import { useState } from "react";
import Dice from "./components/Dice";
import Confetti from "react-confetti";
import { nanoid } from "nanoid";
export default function App() {
  const [dice, setDice] = useState(() => createDice());

  const isGameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  //useEffect for timer
  //

  function createDice() {
    return new Array(10).fill({}).map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  function onHoldClick(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        if (die.id === id) {
          return {
            ...die,
            isHeld: !die.isHeld,
          };
        }
        return die;
      })
    );
  }

  function onRollClick() {
    setDice((prevDice) =>
      prevDice.map((die) =>
        !die.isHeld
          ? {
              ...die,
              value: Math.ceil(Math.random() * 6),
            }
          : die
      )
    );
  }

  const diceArray = dice.map((die) => (
    <Dice
      key={die.id}
      value={die.value}
      hold={() => onHoldClick(die.id)}
      isHeld={die.isHeld}
    />
  ));

  return (
    <>
      <section>
        <div className="main-div">
          {isGameWon && <Confetti />}
          <h1>Tenzies</h1>
          <p>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>

          <div className="grid-container">{diceArray}</div>

          <div className="btn-container">
            <button
              className="roll-btn"
              onClick={isGameWon ? () => setDice(createDice) : onRollClick}
            >
              {isGameWon ? "New round" : "Roll"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

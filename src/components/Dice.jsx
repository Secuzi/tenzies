/* eslint-disable react/prop-types */
export default function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <button className="dice" onClick={props.hold} style={styles}>
      {props.value}
    </button>
  );
}

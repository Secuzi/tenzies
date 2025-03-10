/* eslint-disable react/prop-types */
import SlotCounter from "react-slot-counter";
export default function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <button className="dice" onClick={props.hold} style={styles}>
      <SlotCounter value={props.value} animateUnchanged={true} />
    </button>
  );
}

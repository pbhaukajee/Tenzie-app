export default function Die(props) {
  const styles = props.isHeld ? "#59E391" : "white";
  return (
    <div
      className="die-face"
      style={{ backgroundColor: styles }}
      onClick={props.holdDice}
    >
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}

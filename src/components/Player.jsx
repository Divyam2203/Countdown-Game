import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [inputName, setInputName] = useState(null);

  function handleClick(event) {
    event.preventDefault()
    setInputName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {inputName ?? "Unknown Entity"}</h2>
      <form onSubmit={handleClick}>
        <input type="text" ref={playerName} required/>
        <button  type="submit">Set Name</button>
      </form>
    </section>
  );
}

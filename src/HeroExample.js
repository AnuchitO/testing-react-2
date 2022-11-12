export function HeroExample(props) {
  return (
    <>
      <label htmlFor="superhero"> Superhero Name: </label>
      <input id="superhero" type="text" onChange={(e) => {}} />
      <br />
      <label htmlFor="power"> Superhero Power: </label>
      <input id="power" type="text" onChange={(e) => {}} />

      <br />
      <select onChange={(e) => {}}>
        <option value="">Select Power</option>
        <option value="Flying">Flying</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Ice">Ice</option>
        <option value="Lightning">Lightning</option>
        <option value="Earth">Earth</option>
        <option value="Wind">Wind</option>
      </select>
      <br />
      <button className="myButton" onClick={() => {}}>
        Add Hero
      </button>
    </>
  )
}

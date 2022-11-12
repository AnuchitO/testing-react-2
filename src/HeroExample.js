import {useState} from 'react'

export function HeroExample(props) {
  const [hero, setHero] = useState({
    superhero: '',
    power: '',
    powerName: '',
    loading: true,
  })
  const [heroes, setHeroes] = useState([])

  return (
    <>
      <label htmlFor="superhero"> Superhero Name: </label>
      <input
        id="superhero"
        type="text"
        value={hero.superhero}
        onChange={(e) => {
          setHero({
            ...hero,
            superhero: e.target.value,
          })
        }}
      />
      <br />
      <label htmlFor="power"> Superhero Power: </label>
      <input
        id="power"
        type="text"
        value={hero.power}
        onChange={(e) => {
          setHero((current) => ({...current, power: e.target.value}))
        }}
      />

      <br />
      <select
        value={hero.powerName}
        onChange={(e) => {
          setHero({...hero, powerName: e.target.value})
        }}
      >
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
      <button
        className="myButton"
        onClick={() => {
          console.log(hero, null, 2)
        }}
      >
        Add Hero
      </button>

      {/*  {hero.name} : {hero.power} : {hero.powerName} */}
    </>
  )
}

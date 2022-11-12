import {useEffect} from 'react'
import {useState} from 'react'
import {useHero} from './useHero'

export function HeroExample(props) {
  const [hero, setHero] = useHero()

  return (
    <>
      <label htmlFor="superhero"> Superhero Name: </label>
      <input
        style={{
          width: '50%',
          border: '3px solid #d7dbdf',
          borderRadius: '0em 0 0 0em',
        }}
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
        style={{
          width: '50%',
          border: '3px solid #d7dbdf',
          borderRadius: '0em 0 0 0em',
        }}
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
          setHero({
            ...hero,
            heroes: [
              ...hero.heroes,
              {
                name: hero.superhero,
                power: hero.power,
                powerName: hero.powerName,
              },
            ],
          })
        }}
      >
        Add Hero
      </button>
      {hero.loading && <div>loading...</div>}
      {hero.heroes.length > 0 && (
        <ul>
          {hero.heroes.map((hero, index) => {
            return (
              <li key={index}>
                {hero.name} : {hero.power} : {hero.powerName}
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

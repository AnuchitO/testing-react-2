import {useEffect, useState} from 'react'

export function useHero() {
  const [hero, setHero] = useState({
    superhero: '',
    power: '',
    powerName: '',
    loading: true,
    heroes: [],
  })

  useEffect(() => {
    fetch(`http://localhost:2727/heroes`)
      .then((res) => res.json())
      .then((data) => {
        setHero({
          ...hero,
          heroes: [...hero.heroes, ...data],
        })
      })
  }, [])

  return [hero, setHero]
}

// setTimeout(() => {

// }, 3000)

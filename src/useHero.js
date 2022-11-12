import {useEffect, useState} from 'react'
import * as http from './http'

export function useHero() {
  const [hero, setHero] = useState({
    superhero: '',
    power: '',
    powerName: '',
    loading: true,
    heroes: [],
  })

  useEffect(() => {
    // setTimeout(() => {
    http
      .get(`http://localhost:2727/heroes`)
      .then((res) => res.json())
      .then((data) => {
        setHero({
          ...hero,
          loading: false,
          heroes: [...hero.heroes, ...data],
        })
      })
    // }, 3000)
  }, [])

  return [hero, setHero]
}

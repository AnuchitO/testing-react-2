import React, {Fragment, useState, useEffect} from 'react'

export const Hi = ({name}) => {
  const [count, setCount] = useState(1)
  const [age, setAge] = useState(10)
  const [heroes, setHeroes] = useState([])
  const [loading, setLoading] = useState(false)

  const showCount = () => {
    // setTimeout(() => {
    alert(count)
    // }, 2000)
  }

  useEffect(() => {
    if (loading) {
      console.log('useEffect')
      fetch(`http://localhost:2727/heroes`)
        .then((res) => res.json())
        .then((data) => {
          setHeroes(data)
        })
    }
  }, [loading])

  useEffect(() => {
    setLoading(true)
  }, [])
	
  return (
    <>
      <h1>
        Hello {name} {count}
      </h1>
      <p>{JSON.stringify(heroes)}</p>
      <button
        onClick={() => {
          console.log('count')
          setCount(count + 1)
        }}
      >
        count me
      </button>
      <button
        onClick={() => {
          console.log('age')
          setAge(age + 1)
        }}
      >
        Age {age}
      </button>
      <button onClick={showCount}>Show My Count</button>
    </>
  )
}

// export class Hi extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       age: props.age,
//     }
//     console.log('constructor')
//   }

//   componentDidMount() {
//     console.log('componentDidMount11111111')
//     this.setState({age: this.state.age + 5})
//   }

//   render() {
//     return (
//       <>
//         <h1>Hello {this.props.name}</h1>
//         <button
//           onClick={() => {
//             this.setState({age: this.state.age + 1})
//             console.log(this.state.age)
//           }}
//         >
//           Click me {this.state.age}
//         </button>
//       </>
//     )
//   }
// }

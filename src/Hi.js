import React, {Fragment} from 'react'

// export const Hi = ({name}) => {
//   return <h1>Hello {name}</h1>
// }

export class Hi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      age: props.age,
    }
  }

  render() {
    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <button
          onClick={() => {
            this.setState({age: this.state.age + 1})
            console.log(this.state.age)
          }}
        >
          Click me
        </button>
      </>
    )
  }
}

import './App.css'
import {Hi} from './Hi'
import {ShowCounter} from './ShowCount'
import ExampleCounter from './CounterUpDown'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Hi name={'Nong'} age={10} /> */}
        {/* <Hi name="React!!!!" age={12} /> */}
        {/* <Hi name="AnuchiOiiiii" age={32} /> */}
        <ShowCounter />
        <br />
        <br />
        <br />
        <ExampleCounter />
      </header>
    </div>
  )
}

export default App

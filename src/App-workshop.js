import './App.css'
import {Hi} from './Hi'
import {ShowCounter} from './ShowCount'
import ExampleCounter from './CounterUpDown'
import ExampleChangeLanguage from './ChangeLanguage'
import {HeroExample} from './HeroExample'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Hi name={'Nong'} age={10} /> */}
        {/* <Hi name="React!!!!" age={12} /> */}
        {/* <Hi name="AnuchiOiiiii" age={32} /> */}
        {/* <ShowCounter /> */}
        <br />
        <br />
        <br />
        {/* <ExampleCounter /> */}
        <br />
        <br />
        <br />
        {/* <ExampleChangeLanguage /> */}
        <br />
        <br />
        <HeroExample />
      </header>
    </div>
  )
}

export default App

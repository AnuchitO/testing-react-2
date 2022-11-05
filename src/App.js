import './App.css'

const Hi = ({name}) => {
  return <h1>Hello {name}</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hi name="Nong" />
        <Hi name="React!!!!" />
        <Hi name="AnuchiO" />
      </header>
    </div>
  )
}

export default App

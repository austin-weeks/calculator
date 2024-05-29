import './App.css'
import Calculator from './Components/Calculator'
import reactlogo from "./assets/react.svg"

function App() {

  return (
    <>
      <div className='heading'>
        <h1>JS Calculator</h1>
        <h3>Made with React <img className='react-logo' src={reactlogo} /></h3>
        <p style={{maxWidth: "30rem", margin: "auto"}}>Note: this calculator uses <em>immediate execution logic</em>, executing operations from left to right, rather than standard order of operations.</p>
      </div>

      <Calculator />
      <div style={{ fontSize: "0.8rem", marginTop: ".8em" }}>
        made by <a href="http://austin-weeks.github.io" target="_blank">austin weeks</a>
      </div>

    </>
  )
}

export default App

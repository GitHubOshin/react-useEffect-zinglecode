import { useEffect, useState } from 'react'
import './App.css'
import Popup from './Popup'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  let popup = null
  if (isPopupOpen) {
    popup = <Popup onPopupClose={() => setIsPopupOpen(false)} />
  }

  return (
    <section className="app-section">
      <div className="app-container">
        <h1>Love you guys!</h1>
        <button onClick={() => setIsPopupOpen(true)}>Open the popup</button>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
        <p>CuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCuteCute</p>
      </div>
      {popup}
    </section>
  )
}

export default App

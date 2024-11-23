import Title from './components/Title'
import Counter from './components/Counter'

import Background from './assets/background.jpg'

import './App.css'

function App() {

  return (
    <div className="App" style={{backgroundImage: `url(${Background})`}}>
      <div className="container">
        <Title title="Contagem Regressiva"/>
        <div className="countdown-container">
          <Counter title="Dias" number={0}/>
          <Counter title="Horas" number={0}/>
          <Counter title="Minutos" number={0}/>
          <Counter title="Segundos" number={0}/>
        </div>
      </div>
    </div>
  )
}

export default App

import './App.css'
import Header from './Header.jsx'
import StockCard from './StockCard.jsx'

function App() {

  return (
    <>
      
      <Header/>
      <div className="container">
        <h1>📋 Individual Stock Analysis</h1>
      </div>
      <StockCard/>
    </>
  )
}

export default App

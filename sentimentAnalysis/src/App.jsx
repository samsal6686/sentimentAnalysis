import './App.css'
import Header from './Header.jsx'
import StockCard from './StockCard.jsx'

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="main-title">📋 Individual Stock Analysis</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row g-4 justify-content-center">
              <StockCard/>
              <StockCard/>
              <StockCard/>
              <StockCard/>
              <StockCard/>
              <StockCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


import './App.css'
import logo from './assets/ironhack-logo-xs.png'
import menu from './assets/menu-top-xs.png'
import declarative from './assets/icon1.png'
import components from './assets/icon2.png'
import singleWay from './assets/icon3.png'
import jsx from './assets/icon4.png'

function App() {
  
  return (
  <div className='App'>
  <div className='blue'>
  <nav>
    <img src={logo}/>
    <img src={menu}/>
  </nav>

  <div className='say-awesome'>
    <h2>Say hello to <br/> ReactJS</h2>
    <h4>You will learn how to use<br/>the most popular frontend library,<br/>and become a super Ninja developer.</h4>
    <button>Awesome!</button>
  </div>
  </div>

  <div className='white'>
  <div>
    <img src={declarative}/>
    <h3>Declarative</h3>
    <p>React makes it<br/>painless to create<br/>interactive UIs</p>
  </div>
  <div>
    <img src={components} />
    <h3>Components</h3>
    <p>Build encapsulated<br/>components that<br/>manage their state.</p>
  </div>
  <div>
    <img src={singleWay} />
    <h3>Single-way</h3>
    <p>Build encapsulated<br/>components that<br/>manage their state.</p>
  </div>
  <div>
    <img src={jsx} />
    <h3>JSX</h3>
    <p>Build encapsulated<br/>components that<br/>manage their state.</p>
  </div>
    
  </div>
  </div>
  )
}

export default App

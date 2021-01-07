import './App.css';
import Nav from './composants/Nav'
import {Main } from './composants/Main'
// import {address, getUserName} from './composants/test1'
// import userCard from "./composants/test1"
import Footer from './composants/footer/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Footer />
      {/* <h2>{userCard.address}</h2> */}
      {/* <button onClick={()=>alert(userCard.name)}>ok</button> */}
    </div>
  );
}

export default App;

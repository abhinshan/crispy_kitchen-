import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Video from './Video';
import Special from './Special';
import Menu from './Menu';
import Default from './Default';
import Newevents from './Newevents';
import Events from './Events';
import Addevent from './Addevent';
import Footer from './Footer';




function App() {
  return (
    <div className="App">
     <Navbar/>
     <Video/>
    <Special/>
    <Menu/>
    <Default/>
    <Newevents/>
    <Events/>
    <Addevent/>
    <Footer/>

    </div>
  );
}

export default App;

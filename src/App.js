import Navbar from "./Components/Navbar";
import { Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Gallerys from "./Pages/Gallerys";

function App() {
  return (
   <>
   
   <Navbar/>
    <Switch>

      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/gallery' component={Gallerys}/>

    </Switch>
    <Footer/>
   </>
  );
}

export default App;

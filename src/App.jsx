import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Search from "./Components/Search/Search";
import Info from "./Components/Info/Info";
import Subscriber from "./Components/Subscribers/Subscriber";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return(
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Info/>
      <Subscriber/>
      <Footer/>
    </div>
  )
}

export default App;
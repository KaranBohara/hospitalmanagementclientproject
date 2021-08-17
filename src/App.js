import Header from "./components/Header";
import Sidetool from "./components/Sidetool";
import Home from "./components/Home";
import "./components/Header.css";
import Footer from "./components/Footer";
import Maternity from "./components/Maternity";
import Login from "./components/Login";
import Pharmacycart from "./components/Pharmacycart";
import Feedback from "./components/Feedback";
import {BrowserRouter as Redirect,Route,Switch } from "react-router-dom";

function App() {
  return (
    <>
     <Header />
     <Sidetool/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/maternity" component={Maternity}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/pharmacycart" component={Pharmacycart}/>
        <Route exact path="/feedback" component={Feedback}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </>
  );
}
export default App;

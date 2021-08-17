import Doctorsinfo from "./Doctorsinfo";
import Ourfacilities from "./Ourfacilities";
import Carousel from "./Carousel";
import Carouseldata from "./Carouseldata.jsx";
// import {BrowserRouter as Router,Route,Switch } from "react-router-dom";

function Home() {
  return (
    <>
    <Carousel slides={Carouseldata} />
      <Doctorsinfo />
      <Ourfacilities/>
    </>
  );
}
export default Home;

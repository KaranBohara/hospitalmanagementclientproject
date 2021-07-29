import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Carouseldata from "./components/Carouseldata.jsx";
import "./components/Header.css";
import Doctorsinfo from "./components/Doctorsinfo";
import Ourfacilities from "./components/Ourfacilities";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Carousel slides={Carouseldata} />
      <Doctorsinfo />
      {/* <Ourfacilities/> */}
      {/* <Footer/> */}
    </>
  );
}
export default App;

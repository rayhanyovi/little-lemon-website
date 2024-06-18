import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./section/Hero";
import PopularDish from "./section/PopularDish";
import Review from "./section/Review";
import AboutUs from "./section/AboutUs";
import Gallery from "./section/Gallery";
function App() {
  return (
    <div className="bg-white w-full flex flex-col min-h-screen h-fit text-[#495E57] overflow-x-hidden pb-60">
      <Navbar />
      <Hero />
      <PopularDish />
      <Review />
      <AboutUs />
      <Gallery />
    </div>
  );
}

export default App;

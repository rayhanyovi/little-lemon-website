import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./section/Hero";
import PopularDish from "./section/PopularDish";

function App() {
  return (
    <div className="flex flex-col w-dvh min-h-screen h-fit text-[#495E57] mx-4 border-4 border-red-400 overflow-hidden">
      <Navbar />
      <Hero />
      <PopularDish />
    </div>
  );
}

export default App;

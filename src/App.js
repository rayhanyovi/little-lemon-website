import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./section/Hero";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen h-fit text-[#495E57] ">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;

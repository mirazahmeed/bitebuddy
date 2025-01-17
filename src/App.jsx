import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Recipes from "./Components/Recipes/Recipes";

function App() {
    return (
        <>
            <div>
                <Navbar></Navbar>
                <div className="container mx-auto">
                    <Hero></Hero>
                    <Recipes></Recipes>
                </div>
            </div>
        </>
    );
}

export default App;

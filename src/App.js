import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import BoastSection from "./components/BoastSection";
import Footer from "./components/Footer";
import CardSection from "./components/CardSection";
function App() {
  return (
    <div>
      <div className="main">
        <NavBar />
        <Header />
      </div>
      <div className="secondmain">
        <CardSection />
        <BoastSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;

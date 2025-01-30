import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PortfolioCard from "./components/PortfolioCard";



function Portfolio() {
  return (
    <div className="bg-black">
      <Navbar />  
      <PortfolioCard />
      <Footer />
    </div>
  );
}

export default Portfolio;
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import PortfolioCard from "./components/PortfolioCard";
import StatisticsSection from "./components/StatisticsSection";
import Roadmap from  "./components/Roadmap";


function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Blog />
      <PortfolioCard />
      <StatisticsSection />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;

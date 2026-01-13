import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <HomePage />
        </main>

        <Footer />

      </div>
  );
}

export default App;

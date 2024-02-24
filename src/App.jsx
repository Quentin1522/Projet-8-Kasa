import { BrowserRouter,Routes, Route} from "react-router-dom";
import Header from "../src/components/header/Header";
import Banner from "../src/components/banner/Banner";
import Gallery from "./components/gallery/Gallery";
import data from '../src/Data/data.json';
import Footer from "./components/footer/Footer";
import ProductDetails from "../src/Pages/productPage/ProductPage";
import Error from "./Pages/error/Error";
import About from "./Pages/about/About";
import source from "./assets/source.png";


function App() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<><Banner img={source} alt="source" 
                                              bgOpacity="0.5" 
                                              title="Chez vous, partout et ailleurs"
                                              titleMobileOne="Chez vous,"
                                              titleMobileTwo="partout et ailleurs"
                                              />
                                              <Gallery data={data} /></>} />
            <Route path="/product/:id" element={<ProductDetails data={data} />} />
            <Route path="*" element={<Error/>}/>
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <div>
</div>

      </div>
    );
  }

export default App

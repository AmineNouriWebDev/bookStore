import './App.css';
import BookSlider from './components/bool-slider/BookSlider';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeadingTitle from './components/heading-title/HeadingTitle';
import Services from './components/services/Services';
import Slider from './components/slider/Slider';
import {books} from "./data/books";
function App() {
  return (
    <div>
    <Header />
    <Slider />
    <Services />
    <HeadingTitle title="Most gifted"/>
    <BookSlider  data = {books}/>
    <HeadingTitle title="Best seller"/>
    <BookSlider  data = {books}/>
    <HeadingTitle title="Most wished for "/>
    <BookSlider  data = {books}/>
    <Footer />
    </div>
  );
}

export default App;

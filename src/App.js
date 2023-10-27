import './App.css';
import Header from './components/header/header';
import Texture from './components/texture/texture';
import Info from './components/info/info';
import Photo from './components/photo/photo';
import Tarif from './components/tarif/tarif';
import Footer from './components/footer/footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Texture />
            <Info />
            <Photo />
            <Tarif />
            <Footer />
        </div>
    );
}

export default App;
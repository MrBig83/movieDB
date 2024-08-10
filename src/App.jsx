import Header from "./assets/components/Header/Header";
import Main from "./assets/components/Main/Main";
import Footer from "./assets/components/Footer/Footer";
import MovieContextProvider from "./assets/context/MovieContext";


const App = () => {

    return (
        <MovieContextProvider>
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        </MovieContextProvider>
    )
}
export default App;
import Header from "./assets/components/Header/Header";
import Main from "./assets/components/Main/Main";
import Footer from "./assets/components/Footer/Footer";



const App = () => {

    return (
        <div>
            {Header()}
            {Main()}
            {Footer()}
        </div>
    )
}
export default App;
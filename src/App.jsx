import Header from "./assets/components/Header/Header";
import Main from "./assets/components/Main/Main";
import Footer from "./assets/components/Footer/Footer";
import ListContextProvider from "./context/ListContext";

const App = () => {
    return (
        <ListContextProvider>
            <div>
                <Header />  {/* Use JSX syntax */}
                <Main />    {/* Use JSX syntax */}
                <Footer />  {/* Use JSX syntax */}
            </div>
        </ListContextProvider>
    );
};

export default App;

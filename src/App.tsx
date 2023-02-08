import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import AccBlock from "./components/AccBlock/AccBlock";
import SideBar from "./components/MainList/SideBar/top/TopSideBar";
import Main from "./components/MainList/Main";
import MainRoutes from "./Routes/MainRoutes";
function App() {
    return (
        <div className="App">
            {/* <Navbar /> */}
            <MainRoutes />
        </div>
    );
}

export default App;

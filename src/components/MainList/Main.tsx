import React from "react";
import List from "./List/List";
import SideBar from "./SideBar/top/TopSideBar";
import "./Main.scss";
import MainSideBar from "./SideBar/MainSideBar";
import { useTypeSelector } from "../../hooks/Perems";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    return (
        <div className="main-list">
            <List />
            <MainSideBar />

            <button onClick={() => navigate("/add")} className="add-btn">
                +
            </button>
        </div>
    );
};

export default Main;

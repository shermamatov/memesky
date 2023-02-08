import React from "react";
import BottomSideBar from "./bottom/BottomSideBar";
import TopSideBar from "./top/TopSideBar";
import "./MainSide.scss";
const MainSideBar = () => {
    return (
        <div className="mainSide">
            <TopSideBar />
            <BottomSideBar />
        </div>
    );
};

export default MainSideBar;

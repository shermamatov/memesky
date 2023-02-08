import React, { FC } from "react";
import AccBlock from "./AccBlock/AccBlock";
import Main from "./MainList/Main";

const Home: FC = () => {
    return (
        <div>
            <AccBlock />
            <Main />
        </div>
    );
};

export default Home;

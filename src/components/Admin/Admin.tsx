import React, { FC } from "react";
import { useAppDispatch } from "../../hooks/Perems";
import { addMemeAsync } from "../../store/async/AsyncMeme";
import { MemeType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "./Admin.scss";
const Admin: FC = () => {
    const navigate = useNavigate();
    const [title, setTitle] = React.useState("");
    const [img, setImg] = React.useState("");
    const [name, setName] = React.useState("");
    const [type, setType] = React.useState("");
    const dispatch = useAppDispatch();
    function addMeme() {
        let obj: MemeType = {
            title,
            img,
            autor: name,
            data: new Date().toLocaleDateString(),
            id: Date.now(),
            type,
        };
        dispatch(addMemeAsync(obj));
    }
    return (
        <div className="admin-block">
            <div className="input-block">
                <h1>admin</h1>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="title"
                />
                <input
                    type="text"
                    onChange={(e) => setImg(e.target.value)}
                    placeholder="meme IMG"
                />
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                />
                <select onChange={(e) => setType(e.target.value)}>
                    <option value="all">all</option>
                    <option value="IT">IT</option>
                    <option value="game">game</option>
                    <option value="live">live</option>
                </select>
                <button onClick={() => addMeme()}>add</button>
            </div>
            <button className="home-btn" onClick={() => navigate("/")}>
                <HomeIcon sx={{ fontSize: "40px" }} />
            </button>
        </div>
    );
};

export default Admin;

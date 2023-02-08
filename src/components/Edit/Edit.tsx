import React, { FC, useEffect } from "react";
import { useAppDispatch, useTypeSelector } from "../../hooks/Perems";
import {
    addMemeAsync,
    editData,
    getOneUser,
} from "../../store/async/AsyncMeme";
import { MemeType } from "../../types/types";
import { useParams, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Edit: FC = () => {
    const [title, setTitle] = React.useState("");
    const [img, setImg] = React.useState("");
    const [name, setName] = React.useState("");
    const [type, setType] = React.useState("");
    const dispatch = useAppDispatch();
    const { oneMeme } = useTypeSelector((state) => state.meme);
    const { id } = useParams();
    const nav = useNavigate();
    useEffect(() => {
        dispatch(getOneUser(id));
    }, []);

    useEffect(() => {
        setTitle(oneMeme.title);
        setImg(oneMeme.img);
        setName(oneMeme.autor);
        setType(oneMeme.type);
    }, [oneMeme]);

    function editMeme() {
        let obj: MemeType = {
            title,
            img,
            autor: name,
            data: new Date().toLocaleDateString(),
            id: oneMeme.id,
            type,
        };
        dispatch(editData(id, obj));
        nav("/");
    }
    return (
        <div className="admin-block">
            <div className="input-block">
                <h1>edit panel</h1>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="title"
                />
                <input
                    type="text"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                    placeholder="meme IMG"
                />
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                />
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="all">all</option>
                    <option value="IT">IT</option>
                    <option value="game">game</option>
                    <option value="live">live</option>
                </select>
                <button onClick={() => editMeme()}>edit</button>
            </div>
            <button className="home-btn" onClick={() => nav("/")}>
                <HomeIcon sx={{ fontSize: "40px" }} />
            </button>
        </div>
    );
};

export default Edit;

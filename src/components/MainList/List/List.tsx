import React, { useEffect } from "react";
import { useAppDispatch, useTypeSelector } from "../../../hooks/Perems";
import { DeleteUser, getMemeAsync } from "../../../store/async/AsyncMeme";
import { MemeType } from "../../../types/types";
import "./List.scss";
import { useNavigate } from "react-router-dom";

const List = () => {
    const { memes, oneMeme } = useTypeSelector((state) => state.meme);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getMemeAsync());
    }, []);
    const navigate = useNavigate();
    return (
        <div className="list">
            {memes ? (
                memes.map((item: MemeType) => (
                    <div className="card" key={item.id}>
                        <div className="top">
                            <div className="autor">
                                <img
                                    src="https://www.meme-arsenal.com/memes/e0f221253de3a3d2282072561453b45f.jpg"
                                    alt=""
                                    width="50px"
                                />
                                <h4>{item.autor}</h4>
                            </div>
                            <h2>{item.title}</h2>
                        </div>
                        <div className="midle">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="bottom">
                            <button
                                className="delete-btn"
                                onClick={() => dispatch(DeleteUser(item.id))}
                            >
                                delete
                            </button>
                            <button
                                onClick={() => navigate(`/edit/${item.id}`)}
                                className="edit-btn"
                            >
                                edit
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div
                    style={{
                        width: "500px",
                        height: "200px",
                        backgroundColor: "#fff",
                    }}
                >
                    not found
                </div>
            )}
        </div>
    );
};

export default List;

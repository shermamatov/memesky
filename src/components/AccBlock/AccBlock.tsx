import React from "react";
import "./AccBlock.scss";
const AccBlock = () => {
    return (
        <div>
            <div className="main-acc">
                <div className="top">
                    <img
                        src="https://phonoteka.org/uploads/posts/2021-07/1625504066_9-phonoteka-org-p-memi-na-rabochii-stol-kompyutera-krasivo-o-9.jpg"
                        alt=""
                    />
                </div>
                <div className="bottom">
                    <div className="avatarka">
                        <img
                            src="https://avatars.mds.yandex.net/i?id=d2992d1199d7d52fb7e6e56042671876a4f5fa50-5896582-images-thumbs&n=13"
                            alt=""
                        />
                    </div>
                    <div className="acc-info">
                        <h1>Мемы</h1>
                        <h3>самые лучшие меммммммыыыыыыыы</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccBlock;

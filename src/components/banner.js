import React from "react"
import "../components/styles/banner.scss"
import profileImage from "../components/profileImage"

const profPic = (pic) => {
    if (pic) return profileImage();
}

const pageInfo = (info) => {
    return (
        <div className="banner">
            <div className="bannerContent">
                <div className="profPic">{profPic(info.img)}</div>
                <h1>{info.name}</h1>
                <p>{info.desc}</p>  
            </div>
        </div>
    );
}

export default pageInfo;
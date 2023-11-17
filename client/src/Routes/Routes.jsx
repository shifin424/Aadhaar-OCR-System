import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home/Home";
import UploadImage from "../Pages/UploadImage/UploadImage";


const UserRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upload-image" element={<UploadImage />} />
            </Routes>
        </div>
    )
}

export default UserRoutes
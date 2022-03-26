import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MyHeader from '../components/MyHeader';

const Layout = () => {

    const location = useLocation();
    console.log(location.pathname);
    const [isSessionAcitve, setIsSessionActive] = useState(false);

    useEffect(() => {
        setIsSessionActive(location.pathname !== "/login" ? true : false);
    },[isSessionAcitve]);

    return (
        <>
            {isSessionAcitve && (
                <MyHeader></MyHeader>
            )}
            <Outlet />
        </>
    )
};

export default Layout;
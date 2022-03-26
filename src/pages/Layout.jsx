import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Outlet />
        </>
    )
};

export default Layout;
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, useRoutes} from "react-router-dom";
import Main from "./layout/view";
import './style.css'



const Path_View = () => {
    const routes = useRoutes([
        { path: "/", element: <Main /> },
        { path: "/test", element: <Main /> }

    ]);
    return routes;
};
function App() {


    return (
        <>
            <Router>
                <Path_View/>
            </Router>
        </>

    );

}

export default App;

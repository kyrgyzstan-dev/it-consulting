import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Global from "../global/Global";


const LayOut = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Global/>
            <Footer/>
        </>
    );
};

export default LayOut;
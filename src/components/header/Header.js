import React from 'react';
import images from '../image/logo.svg'

const Header = () => {
    return (
        <>
            <Header id="header">
                <div className="container">
                    <div className="header--content">
                        <div className="header--content__left">
                            <img src={images} alt=""/>
                            <h1>fcghvjhbkjlnk;ml',</h1>
                        </div>
                        {/*<div className="right-content">*/}
                        {/*    <a href="#">Войти</a>*/}
                        {/*    <a href="#">Подписаться</a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </Header>
        </>
    );
};

export default Header;
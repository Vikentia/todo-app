import React from "react";

import s from './Header.module.css';

function Header() {
    return (
        <div className={s.header}>
            <div>
                Todo List
            </div>
        </div>
    );
}

export default Header;
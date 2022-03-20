import React from "react";
import h from './Header.module.css';
const Header = () =>{
    return <header className={h.header}>
        <div>
            {/*<img src='https://w7.pngwing.com/pngs/803/598/png-transparent-phoenix-logo-phoenix-red-bird-illustration-leaf-photography-mirror.png'/>*/}
            <img src={'https://upload.wikimedia.org/wikipedia/ru/b/b2/Hatayspor_-_logo.png'}/>
        </div>
    </header>
}
export default Header;
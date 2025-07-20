import style from './Navigation.module.css';


const Navigation = () => {
    return (
        <header>
            <nav className={style.navbar}>

                <div className={style.logo}><img src="public\nike.png" alt="nike-logo" />
                </div>

                <div className={style.lists}>
                    <a href="">MENU</a>     
                    <a href="">LOCATION</a>     
                    <a href="">ABOUT</a>     
                    <a href="">CONTACT</a>     
                </div>

                <div className={style.login}>
                    <button>Login</button>
                </div>

            </nav>
        </header>
  );
}

export default Navigation;
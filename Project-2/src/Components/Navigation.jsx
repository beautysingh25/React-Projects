import styles  from './Navigation.module.css';

const Navigation = () => {
    return (

        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logo}><img src="/images.png" alt="logo" /></div>
                <div className={styles.links}>
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">CONTACT</a>
                </div>
            </nav>
      </header>
    );
}

export default Navigation;


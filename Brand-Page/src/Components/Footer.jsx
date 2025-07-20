import styles from './Footer.module.css';
import { SiFlipkart } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";

const Footer = () => {
    return (

      <footer className={styles.footer}>
        <p>Also Available On</p><br />
        <ul className={styles.shopping}>
        <li><a href="https://www.flipkart.com/"> <SiFlipkart size={35}/></a></li>
        <li><a href="https://www.amazon.com/"><FaAmazon size={35}/></a></li>
        </ul>
      </footer>

    )
}
export default Footer;
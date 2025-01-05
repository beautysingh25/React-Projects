import styles from './Main.module.css';
import Button from './Button';
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";



const Main = () => {
    return (
        <main>
        
        <div className={styles.contents}>
          <h1 className={styles.heading}>CONTACT US</h1>
          <p className={styles.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Quisquam fugiat unde animi eveniet ratione accusamus.  <br />Incidunt soluta tempore error delectus doloribus corrupti  possimus distinctio minima, nihil eveniet, quod nostrum mollitia? <br />Incidunt soluta tempore error delectus doloribus corrupti  possimus distinctio minima, nihil eveniet, quod nostrum mollitia?</p>
        </div>

        <section className={styles.mainSection}>
          <section className={styles.section1}>
            
            <div className={styles.btn}>
            <Button text = "VIA SUPPORT CHAT" icon = {<MdOutlineMessage fontSize="24px"/>}/>
            <Button text = "VIA SUPPORT CHAT" icon = {<IoMdCall fontSize="24px"/>}/>
            </div>

            <form action="#">
              <input type="text" /><br /><br />
              <input type="email" /><br /><br />
              <textarea name="text" id=""></textarea><br /><br />

              <button>SUMIT</button>
            </form>
          </section>

          <aside className={styles.aside}>
            <img src="public\service.png" alt="24/7 service image"/>
          </aside>
        </section> 
      </main>
    );
}

export default Main;
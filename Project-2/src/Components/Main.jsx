import styles from './Main.module.css';
import Button from './Button';
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';



const Main = () => {

  const [name, setName] = useState("Mahi Singh");
  const [email, setEmail] = useState("beautysingh25@gmail.com");
  const [text, setText] = useState("Hello Yara");


  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }
  

  return (
      <main>
        
      <div className={styles.contents}>
        <h1 className={styles.heading}>CONTACT US</h1>
        <p className={styles.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Quisquam fugiat unde animi eveniet ratione accusamus.  Incidunt soluta tempore error delectus doloribus corrupti  possimus distinctio <br />minima,  nihil eveniet, quod nostrum mollitia? Incidunt soluta tempore error delectus doloribus corrupti  possimus distinctio minima, nihil eveniet, quod nostrum mollitia? Lorem ipsum dolor<br /> sit amet, consectetur adipisicing elit. Quo, iste.</p>
      </div>

      <section className={styles.mainSection}>
        <section className={styles.section1}>
            
          <div className={styles.btn}>
          <Button text = "VIA SUPPORT CHAT" icon = {<MdOutlineMessage fontSize="24px"/>}/>
          <Button text = "VIA SUPPORT CALL" 
          icon = {<IoMdCall fontSize="24px"/>} />
          </div> <br />

          <Button 
          isOutline = {true}
          text = "VIA EMAIL FORM" 
          icon = {<MdEmail fontSize="24px"/>}/> <br />

          <form onSubmit={onSubmit} className={styles.contactForm} action="#">
            <div className={styles.formContainer}>
              <label htmlFor="name">Name</label>
              <input type="text" name='name'/><br/><br/>
            </div>
            <div className={styles.formContainer}>
              <label htmlFor="email">E-Mail</label>
              <input type="text" name='email'/><br/><br/>
            </div>
            <div className={styles.formContainer}>
              <label htmlFor="text">Text</label>
              <textarea name='text' rows={5}/><br/>
            </div>

            <div className={styles.submit}>
              <label htmlFor="submit"></label>
              <button name='submit'>SUMIT</button>
            </div>
            <div>
              {name + " " + email + " " + text}
            </div>
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
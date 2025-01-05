import styles from "./Main.module.css";


const Main = () => {
    return (
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.content}>
            <h1 className={styles.heading}>YOUR FEET <br />DESERVE <br />THE BEST</h1>
            <p className={styles.para}>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br /> HELP YOU WITH OUR SHOES. YOUR FEET DESERVE <br /> THE BEST AND WE'RE HERE TO HELP YOU WITH OUR <br />SHOES.</p>
          </div>

          <div className={styles.sectionButton}>
            <button className={styles.shop}>Shop Now</button>
            <button className={styles.cate}>Category</button>
          </div>
        </section>

        <aside className={styles.aside}>
          <img src="../public/shoes.png" alt="" />
        </aside>
      </main>

    )
}
export default Main;
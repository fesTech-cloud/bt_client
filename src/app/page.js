
import styles from "./page.module.css"
export default function Home(){
  return(
    <div id={styles["container"]}>
      <video autoPlay muted loop id={styles["banner"]}>
       <source src="/videos/banner.mp4" type="video/mp4" />
       </video>
       
       <div id={styles["content"]}>
          <h1>Hello world</h1>
       </div>
    </div>
    // <Upload/>
  )
}
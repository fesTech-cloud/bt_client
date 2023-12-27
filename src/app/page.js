
import styles from "./page.module.css"
import Image from "next/image"
export default function Home(){
  return(
    <div id={styles["container"]}>


      {/* desktop */}
      <div id={styles["desktop_wrapper"]}>
      <video autoPlay muted loop id={styles["desktop_banner"]}>
       <source src="/videos/banner.mp4" type="video/mp4" />
       </video>
       </div>
       <div id={styles["content"]}>
          <h1>Hello world</h1>
       </div>


       {/* mobile */}
       <div id={styles["mobile_banner"]}>
         <Image src="/image/img.jpg" alt="mobile banner"
           width={0}
           height={0}
           sizes="100vw"
           style={{ width: '100%', height: 'auto' }} 
         />
       </div>
    </div>
    // <Upload/>
  )
}
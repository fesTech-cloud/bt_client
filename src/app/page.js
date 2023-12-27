"use client"

import styles from "./page.module.css"

import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
export default function Home(){

  
  return(
    <div id={styles["container"]}>

      {/* desktop */}
      <div id={styles["desktop_wrapper"]}>
      <video autoPlay muted loop id={styles["desktop_banner"]}>
       <source src="/videos/banner.mp4" type="video/mp4" />
       </video>
       <div className={styles["content"]}>
          <h1>Hello world</h1>
       </div>

       </div>
      

       {/* mobile */}
       <div id={styles["mobile_banner"]}>
        <div className={styles["content"]}>
              <nav className={styles["mobile_nav"]}>
                    <div><Image src="public/image/logo2.jpg" alt="logo" width={50} height={50}/></div>
                    <ul>
                         <li>Home</li>
                         <li>About</li>
                         <li>Contact</li>
                    </ul>
              </nav>

              <div className={styles["banner_content"]}>
                  <Image src="puplic/image/img.jpg" alt="banner" sizes="100%" width={500} height={500}/>
                  
                  <div className={styles["main"]}>
                    <h3>
                    <TypeAnimation
                     sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Welcome to',
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      'Worship with us @',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '24px', display: 'inline-block' }}
                    repeat={Infinity}
                  />
                  </h3>
                    <h2>Breakthrough Parish</h2>


                    <div className={styles["button_container"]}>
                      <button className={styles['started']}>GET STARTED</button>
                      <button className={styles['request']}>PRAYER REQUEST</button>
                    </div>
                  </div>
                  <section id={styles["section1"]}>
                  <h1>Mission</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                    Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
             </section>

             <section id={styles["section2"]}>
                  <h1>Vision</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                    Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
             </section>
            </div>
              
        </div>
       </div>
    </div>
    // <Upload/>
  )
}
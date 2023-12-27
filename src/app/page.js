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
         <h3>Welcome to</h3>
              <h2>
              <TypeAnimation
               sequence={[
               // Same substring at the start will only be typed out once, initially
               'Breakthrough Parish',
               1000, // wait 1s before replacing "Mice" with "Hamsters"
               'A home Of Worshippers',
           1000]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
              </h2>
              
         </div>
       </div>
    </div>
    // <Upload/>
  )
}
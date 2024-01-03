
"use client"
import { useState } from "react"
import style from "../component/signupCss/signup.module.css"
import "./globals.css"
export default function Home() {
  const [showModal, setShowModal] = useState(false)
 
  const modalHundle = () => {
    setShowModal(!showModal)
  }

  return (
    <main className={style.homepage}>
      <div>
        <button onClick={()=> modalHundle()} className={style.sigup_btn}>SignUp</button>
      </div>
      {showModal && (
      <section className={style.modal}>
        <p onClick={()=> modalHundle()}>X</p>
        <div className={style.forms} >
          <div>
            <label>Organisation name</label>
            <input type='text' name='organisation_name' placeholder='Organisation name'/>
          </div>
          <button className={style.btn}>SignUp</button>
        </div>
      </section>
      )}
      
    </main>
  )
}

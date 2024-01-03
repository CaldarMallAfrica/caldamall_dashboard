
"use client"
import { useEffect, useState } from "react"
import style from "../component/signupCss/signup.module.css"
import "./globals.css"
import axios from "axios"
import { METHODS } from "http"
export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [organisation_name, setOrganisation_name] = useState("")
 
  const modalHundle = () => {
    setShowModal(!showModal)
  }

  const OrgnanisationNameInputChange = (e) => {
    setOrganisation_name(e.target.value)
  }

  const customHeaders = {
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImlhdCI6MTcwMzQ5NDQ3MSwiZXhwIjoxNzA0MzU4NDcxfQ.8KO_7EZ0iGi0Gv0pRtaHz29qlcDt44TGyqDdSUygglg',  // Replace with your actual authorization token
  'Content-Type': 'application/json',
  // Add any other headers you need
};

  const SignUpHundleSubmit = async() => {
    try {
      const respose = await fetch("http://localhost:8000/api/organisation/registerOrganisation", {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify({organisation_name})
      })
      // const response = await axios.post("/api/organisation/registerOrganisation", { organisation_name }, { headers: customHeaders })
      // const data = await response
      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
   // SignUpHundleSubmit()
  }, [])

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
            <input onChange={OrgnanisationNameInputChange} type='text' name='organisation_name' placeholder='Organisation name' value={organisation_name}/>
          </div>
          <button onClick={()=> SignUpHundleSubmit()} className={style.btn}>SignUp</button>
        </div>
      </section>
      )}
      
    </main>
  )
}

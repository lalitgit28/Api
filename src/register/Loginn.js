import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Loginn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        // console.log(e,"event")

        e.preventDefault();
        axios.post("http://localhost:4000/api/users/login", {
            email,
            password
        }).then((response) => {

            alert("login success")
            localStorage.setItem("token", response.data.accessToken)
            // console.log(response.data)
            navigate("/contact")
        })
    }
    return (
        <>
            <form className='row mt-3 gy-2 form-control' onSubmit={handleSubmit}>
                <div>
                    <lable className="form-lable">Email:
                        <input type='email' placeholder='email' name='email' onChange={(e) => setEmail(e.target.value)} />
                    </lable>
                </div>
                <div>
                    <lable className="form-lable">Password:
                        <input type='password' placeholder='password' name='password' onChange={(e) => setPassword(e.target.value)} />
                    </lable>
                </div>
                <div>

                    <input className='btn btn-success' type='submit' value="submit" />


                </div>
            </form>
        </>
    )
}

export default Loginn


// http://localhost:4000/api/users/login
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Register() {
    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/api/users/register", {
            username,
            email,
            password
        }).then(() => {
            navigate("/login")
        })
    }

    return (
        <>
            <form className="row mt-3 gy-3 form-control" onSubmit={handleSubmit}>
                <div >
                    <lable className="form-lable" >Usename:
                        <input type='text' placeholder='username' name='username' onChange={(e) => setName(e.target.value)} />
                    </lable>
                </div>
                <div >
                    <lable>Email:
                        <input type='email' placeholder='email' name='email' onChange={(e) => setEmail(e.target.value)} />
                    </lable>
                </div>
                <div >
                    <lable>Password:
                        <input type='password' placeholder='password' name='password' onChange={(e) => setPassword(e.target.value)} />
                    </lable>
                </div>
                <div className='col-lg4' >
                    <input className='btn btn-primary ' type='submit' value="submit" />
                </div>
            </form>
        </>
    )
}

export default Register


// // http://localhost:4000/api/users/register


// import React, { useState } from 'react';
// import axios from 'axios';

// function Register() {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:4000/api/users/register', user)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:
//             <input type="text" placeholder="username" name="name" value={user.name} onChange={handleChange} />
//           </label>
//         </div>
//         <div>
//           <label>Email:
//             <input type="email" placeholder="email" name="email" value={user.email} onChange={handleChange} />
//           </label>
//         </div>
//         <div>
//           <label>Password:
//             <input type="password" placeholder="password" name="password" value={user.password} onChange={handleChange} />
//           </label>
//         </div>
//         <div>
//           <input type="submit" value="Submit" />
//         </div>
//       </form>
//     </>
//   );
// }

// export default Register;

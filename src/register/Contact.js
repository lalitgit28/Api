import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Authorization token not found');
      return;
    }

    const formData = {
      name,
      email,
      phone,
    };

    axios
      .post('http://localhost:4000/api/contacts', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        const { _id } = response.data;
        localStorage.setItem('userId', _id);
        alert('Success');

        navigate("/getdata")
      })
      .catch((error) => {
        console.error(error);
        if (error.response && error.response.data) {
          console.log(error.response.data);
        }
        alert('An error occurred');
      });
  };

  return (
    <>
      <form className='row mt-3 gy-2 form-control' onSubmit={handleSubmit}>
        <div>
          <label className='form-tabel'>Username:</label>
          <input
            type="text"
            placeholder="Username"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className='form-tabel'>Email:</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className='form-tabel'>Phone:</label>
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <input className='btn btn-primary' type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
}

export default Contact;










// // import axios from 'axios';
// // import React, { useState } from 'react';

// // function Contact() {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [phone, setPhone] = useState('');

// //   const handleSubmit = () => {
// //     axios
// //       .post('http://localhost:4000/api/contacts', {
// //         username,
// //         email,
// //         phone,
// //       })
// //       .then((response) => {
// //         console.log(response.data);
// //         localStorage.setItem('token', response.data.token); // Assuming the response contains a token field
// //         alert('Success');
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //         alert('An error occurred');
// //       });
// //   };

// //   return (
// //     <>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Username:</label>
// //           <input
// //             type="text"
// //             placeholder="username"
// //             name="username"
// //             onChange={(e) => setUsername(e.target.value)}
// //           />
// //         </div>
// //         <div>
// //           <label>Email:</label>
// //           <input
// //             type="email"
// //             placeholder="email"
// //             name="email"
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //         </div>
// //         <div>
// //           <label>Phone:</label>
// //           <input
// //             type="number"
// //             placeholder="phone"
// //             name="phone"
// //             onChange={(e) => setPhone(e.target.value)}
// //           />
// //         </div>
// //         <div>
// //           <input type="submit" value="Submit" />
// //         </div>
// //       </form>
// //     </>
// //   );
// // }

// // export default Contact;

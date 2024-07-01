import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function GetData() {
    const [getData, setGetdata] = useState([])
     const token = localStorage.getItem('token');

    useEffect((value) => {
        console.log(value)
        axios.get(`http://localhost:4000/api/contacts`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                console.log(response.data)
                setGetdata(response.data)

            })
            .catch((error) => {
                alert(error, "something went wrong")
            })
    }, [])

    return (        
        <>
            <div className='container'>
                <div className='row mt-3'>
                    <Link to="/">
                        <button className='btn btn-info'>Register</button>
                    </Link>
                </div>
            </div>
            <table className='table  table-striped table-hover mt-3'>
                <thead >
                    <tr className=' table-info'>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {getData.map(item =>
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </>
    )
}

export default GetData
import axios from "axios";
import React, { useState } from "react";

const ApiPage = () => {

    let [userlist, updateUserList] = useState([]);
    let [userForm, updateUserForm] = useState({
        name: "",
        job: "",
    }

    )

    const getApiMethod = () => {
        const URL = "https://reqres.in/api/users?page=2"
        axios.get(URL)
            .then((response) => {
                console.log(response.data);              // why data is used to show consle in data olny//

                updateUserList(response.data.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    let userResults = userlist.map((value, index) => {
        return (
            <tr key={index}>
                <td>{value.id}</td>
                <td>{value.frist_name}</td>
                <td>{value.last_name}</td>
                <td>{value.email}</td>
                <td>
                    <img src={value.avatar} width="60" />            {/* this can use to show image in web from array value*/}
                </td>
            </tr>

        )
    })
    const handleInputFeild = (event) => {
        updateUserForm({ ...userForm, [event.target.name]: event.target.value });

    }
    const submitForm = () => {
        console.log(userForm);
          const newUrl = "http://localhost5000:/api/create/user"        /// this we created the server number by using nodejs after5000: colon is imp//
        //const Url = "https://reqres.in/api/users"//
        axios.post( newUrl, userForm)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }


   






    return (
        <div>
            <h1>GET METHOD</h1>
            <button onClick={() => getApiMethod()}> GET button</button>
            <table className="customers">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Frist Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                        <th>Profile Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {userResults}
                </tbody>
            </table>





            <h1>POST METHOD</h1>
            <div>
                <label>Enter yourname</label>
                <input name="name" type="text" placeholder="Enter your name" onChange={handleInputFeild}></input>
                <br></br>
                <label>Enter your job</label>
                <input name="job" type="text" placeholder="Enter your job" onChange={handleInputFeild}></input>
                <br></br>
                <button onClick={() => submitForm()}>submit</button>
            </div>





            <h1>PUT METHOD</h1>
        </div>
    )
}

export default ApiPage;
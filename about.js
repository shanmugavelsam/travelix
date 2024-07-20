import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const AboutPage = () => {

    const[employeeList,UpdateEmploveeList] = useState([])


    const submitButton = () => {
        const url = "http://localhost:5000/api/list/employee"

    axios.get(url)
    .then((response) =>{
        UpdateEmploveeList(response.data)
    })
    .catch((error) => {
        alert(error)
    }) 
    };

    let mapResult = employeeList.map((value,index) => {
        return(
            <tr key={index}>
                <tb>{value.employeeName}</tb>
                <tb>{value.designstion}</tb>
                <tb>{value.inTime}</tb>
                <tb>{value.outTime}</tb>
                <tb>{value.salary}</tb>
            </tr>
        )

    })





    return(
        <div>
            <h1>WELCOME TO ABOUT PAGE </h1>
            <button onClick={() => submitButton()}>Employee details</button>
            <table>
                <thead>
                <tr>
                    <th>Employee Name</th>
                    <th>Employee Designation</th>
                    <th>Employee Intime</th>
                    <th>Employee outtime</th>
                    <th>Employee salary</th>
                </tr>
                </thead>
                <tbody>
                 {mapResult}
                </tbody>
            </table>
            <NavLink>homepage</NavLink>
        </div>
    )
}
export default AboutPage;
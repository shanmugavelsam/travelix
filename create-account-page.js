import React,{useState}from "react";

const CreateAccountPage = () => {
    let[accountForm,updateAccountForm] = useState ({
    firstName : "", 
    lastName : "", 
    Emailid : "" , 
    password : ""
  });
  let [accountList, updateAccountList ] = useState([]);

  const handleInputFeild = (event) => {
    updateAccountForm({...accountForm, [event.target.name]: event.target.value});
  }
  const submit = () => {
    console.log(accountForm);
    updateAccountList([...accountList, accountForm])
}


let resultList = accountList.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.firstName}</td>
        <td>{value.lastName}</td>
        <td>{value.Emailid}</td>
        <td>{value.password}</td>
    </tr>
    )
  })

    return(     
        <div>
            <h1>Creation of account page</h1>
            <div>
                <label className="labelextStyle">Enter your fristName</label>
                <input type="text" name="firstName" placeholder="Enter your fristName" onChange={handleInputFeild}></input>
            </div>
            <div>
                <label className="labelextStyle">Enter your lastName</label>
                <input type="text" name="lastName" placeholder="Enter your lastName" onChange={handleInputFeild}></input>
            </div>
            <div>
                <label className="labelextStyle">Enter your Email id</label>
                <input type="text" name="Emailid"placeholder="Enter your Emailid" onChange={handleInputFeild}></input>
            </div>
            <div>
                <label className="labelextStyle">Enter your password</label>
                <input type="password" name="password" placeholder="Enter your password" onChange={handleInputFeild}></input>
            </div>
            <div>
                <button onClick={() => submit()}>Submit</button>
            </div>
            <table>
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>Emailid</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
            {resultList}
        </tbody>
      </table>
        </div>
       
    )
}

export default CreateAccountPage;
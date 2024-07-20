import React, {useState} from "react";

const ConditionalRendringPage = () => {

    let[visiablity,updateVisiablity] = useState(true);
    const showHide = () => {
        updateVisiablity(!visiablity);  //Why ! this symbol used means this vise-versed// 
    };
    return(
        <div>
           <h1> Condtional rendring(Hide/Show)</h1>
           <h2>Condition if inline</h2>
           
           {/* conditionName  && HTML Code */}                          {/*syntax for if-line verification*/}
          { visiablity && <img src={require("../images/325599406_1168594777104367_1106456838742826126_n.jpg")} width={300}/> }
          <button onClick={ () => showHide() }>Show/hide</button>



           <h2>Condition if elseinline</h2>

           {/*ConditionName ? HTML code1 : HTML code2 (any type code we can use like  input, img anything)*/}          {/*Syntax for If-else verifaction*/}

           { visiablity ? <h2>Access accepted</h2> : <img src={require("../images/access-denied-stamp-png-768x512.png")} width={200}/>}    
        </div>
    )
};
export default ConditionalRendringPage;
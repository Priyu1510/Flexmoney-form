import React from 'react';
import { useState } from 'react';
const Forms=()=>{
const[inputs,setInputs]=useState({
  fname:" ",
  lname:" ",
  email:" ",
  phnno:" ",
  age:" ",
  make:false
});
const[checked,setchecked]=useState({
      check1:"6-7 AM "
});
/*const[payment,setpayment]=useState({
      make:false

})*/


          const makepayment=(e)=> {
            e.preventDefault();
                alert("your payment has been done successfully!")
          }
          
        
            const inputEvent=(event)=>{
              const value=event.target.value;
              const name=event.target.name;
              setInputs(values=>({...values,[name]:value}))
            }
          const handlecheckbox=(event)=>{
                 const value=event.target.value;
                 const name=event.target.name;
                setchecked((values=>({...values,[name]:value})));

                 }
        /*   const forpayment=(event)=>{
                  const value=event.target.value;
                  const name=event.target.name;

                  setpayment((values=>({...values,[name]:value})))
           }  */    
          const postData=async(e)=>{
                     e.preventDefault();
                     const { fname,lname,email,phnno,age ,make}=inputs;
                      const{check1}=checked;
                     // const{make}=payment;
                     if((fname&&lname&&email&&phnno&&age&&check1&&make)){

                 const response  = await fetch("https://flexmoneyproject-default-rtdb.firebaseio.com/flecmoneyform.json",
                 {method:"POST",
                  headers:{
                    "Content-Type":"application/json",
                  },
                  body:JSON.stringify({
                    fname,
                    lname,
                    email,
                    phnno,
                    age,
                    check1,
                    make
                  
                  }),
                 }
                  );

                  if(response){
                    setInputs({
                      fname:" ",
                      lname:" ",
                      email:" ",
                      phnno:" ",
                      age:" ",
                      make:" "
                    })
                    setchecked({
                      check1:" "
                    })
                    
                    
                    alert("Data stored successfully")
                  }
                }
                else{
                  alert("plz fill all the data");
                }
          };
      
        return(
        <> 
        <form  method="POST">
          <div  className="main-div">
             <div className="intro"> 
             <label htmlFor="fname" >First name*:
             <input type="text" required
                 placeholder="Enter Your Name"
                 name="fname"
                 value={inputs.fname||""}
                 onChange={inputEvent}
                  autoComplete="off"
               /></label><br/>

             <label htmlFor="lname">Last Name*:
             <input type="text" required
             placeholder="Enter your Last Name"
             name="lname"
             value={inputs.lname}
             onChange={inputEvent}
              autoComplete="off"
             />
             </label>
             <br/>
             <label htmlFor="email">Enter your email*:
             <input type="email" required
             placeholder="Enter Your email"
             name="email"
             value={inputs.email}
            
             onChange={inputEvent}
            autoComplete="off"
             /></label><br/>
             <label htmlFor="phone">Enter your phone number*:
             <input type="tel" required
             placeholder="Enter Your phone no."
             name="phnno"
             value={inputs.phnno}
             onChange={inputEvent}
             autoComplete="off"
             /></label><br/>
             </div>
             <div className="ageno">
             <h5>* People who participated must be lie between in 18-45</h5>
             <label>Enter your age:
             <input 
               type="number" required 
               min="15"
               max="45"
               placeholder="Enter your age:" 
               name="age" 
               value={inputs.age}
               onChange={inputEvent} 
               autoComplete="off"
             />
             </label>  
             </div>
            <div className="payment">
             <input type="checkbox" name="make" value={inputs.make}  onClick={inputEvent}
                  autoComplete="off"     /><label>Payemnt of 500rs/month</label><br/>
            </div>
             
            <div className="choose">  
             <h3>Chosee the batch you are interested in:</h3>
              <input type="radio"  name="check1" value={checked.check1} onRadioChange={handlecheckbox} autoComplete="off"   ></input>6-7AM<br/>
              <input type="radio"  name="check1" onRadioChange={handlecheckbox}  value={checked.check1} autoComplete="off"  ></input>7-8AM<br/>
              <input type="radio" name="check1" onRadioChange={handlecheckbox}  value={checked.check1} autoComplete="off"  ></input>8-9AM<br/>
              <input type="radio"   name="check1" onRadioChange={handlecheckbox} value={checked.check1} autoComplete="off"  ></input>5-6PM<br/>
              <h2>Note:"Participants can shift from one batch to another in different months but in same month they need to be in same batch"</h2>
             </div>

               <button onClick={makepayment}>Payment</button>
               <button onClick={postData}>Submit</button>
               
                <p>Thankyou!</p>
          </div>
        
        </form>
        

        </>
      

        )


}
export default Forms
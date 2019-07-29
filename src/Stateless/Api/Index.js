import React from 'react';
import {Link} from "react-router-dom";
// import axios from "axios";
import './index.css';
// default signp component 
export const Index = ({RemoveDock,topSpace, icon}) =>
{
    let style = {
        paddingTop: `${topSpace}px`
    }

    let stop = (e) =>
    {
        if(e.target.type !== undefined)
        {
            e.target.addEventListener("click", (e)=> e.stopPropagation());
        }
    }
    // custom console err


    let Auth = (e) =>
    {
        e.target.elements[4].value = "Submiting..";
        console.log("%c Auth Form ", "color: #000; background: #0F0", "Authenticating......");
        e.preventDefault();
        let options = {
            method: "POST",
            headers: new Headers({"content-Type": "application/json"}),
            body: JSON.stringify({
                    fname: e.target.elements[0].value,
                    lname: e.target.elements[1].value,
                    email: e.target.elements[2].value,
                    pwd:   e.target.elements[3].value
            })
        }
        fetch("http://localhost:3001/Auth", options)
        .then((res)=>
        {
            if(res.ok)
            {
                setTimeout((ok)=>
                {
                    document.querySelector(".btn").value = "Submitted";
                    setTimeout(() => {
                        document.querySelector("form").reset();
                        document.querySelector(".btn").value = "Sign Up";
                    }, 2000);
                },2000)
            }
            else
            {
                console.log(" %c Error ", "color: #fff; background: #e61c35", "Opps!!!, sorry this is definely my fault, the server url is invalid");
            }
        })
        .catch(err=>
            {
                console.log(" %c Error ", "color: #fff; background: #e61c35", "Opps!!!, you appear to be offline");
            })
        }
        
        return(
            <section className="hero" onClick={RemoveDock} style={style}>
            <form action="/" method="POST" onMouseDown={stop} onSubmit={Auth}>
                 <div className="_D_F _F_C">
                    <img src={icon} alt="avater" style={{width: "40px"}}  />
                </div>
                {/* first name and last name row */}
                <div className="input" >
                    <input type="text" placeholder="first name" name="fname" required/>
                    <input type="text" placeholder="last name" name="lname" required/>
                </div>
                <div className="input">
                    <input type="email" placeholder="email" name="email" required/>
                </div>
                <div className="input">
                <input type="password" placeholder="password" name="pwd" required/>
                </div>
               <div className="input">
               <input type="submit" value="Sign up"  required className="btn"/>
               </div>
               {/* sign in login comes in here */}
               <div className="input _D_F _F_C">
                <h5>Already a member ? <Link to="/sytem api/sign-in" className="fira">Sign In</Link></h5>
               </div>
            </form>
        </section>
    )
}

// sign in



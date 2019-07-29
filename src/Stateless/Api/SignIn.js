import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import axios from "axios";
// sign in
export const SignIn = ({RemoveDock,topSpace, icon}) =>
{
    // inheri the current height of the main navigation bar so as to know how to render the form below it
    let style = {
        paddingTop: `${topSpace}px`
    }

    // this function prevents bubbling in the input elements so as not to cause a state change and Rerendering
    let stop = (e) =>
    {
        if(e.target.type !== undefined)
        {
            e.target.addEventListener("click", (e)=> e.stopPropagation());
        }
    }

    // Form Auth handler 
    let Auth = (e) =>
    {
        e.preventDefault();
        console.log("%c Auth Form ", "color: #000; background: #0F0", "Authenticating......");
        e.target.elements[2].value = "Logging In..";
        let body = {
                email: e.target.elements[0].value,
                pwd: e.target.elements[1].value
            };
        axios.get("http://localhost:3001/Auth/"+body.email)
        .then((res)=>
        {
            if(res.ok)
            {
                
                    document.querySelector(".btn").value = "Submitted";
                
            }
            console.log(" %c Error ", "color: #fff; background: #e61c35", "Opps!!!, sorry this is definely my fault, the server url is invalid");
        })
        .catch(err=>
            {
                console.log(" %c Error ", "color: #fff; background: #e61c35", "Opps!!!, you appear to be offline");
            })
    }

    return(
        <section className="hero" onClick={RemoveDock} style={style}>
            <form action="/" method="GET" onMouseDown={stop} onSubmit={Auth}>
                <div className="_D_F _F_C">
                    <img src={icon} alt="avater" style={{width: "40px"}}  />
                </div>
                <div className="input">
                    <input type="email" placeholder="email" name="email" required/>
                </div>
                <div className="input">
                <input type="password" placeholder="password" name="pwd" required/>
                </div>
               <div className="input">
               <input type="submit" value="Sign in"  required className="btn"/>
               </div>
               {/* sign in login comes in here */}
               <div className="input _D_F _F_C">
                <h5>New here ? <Link to="/system api" className="fira">Sign up</Link></h5>
               </div>
            </form>
        </section>
        
    )
    
}
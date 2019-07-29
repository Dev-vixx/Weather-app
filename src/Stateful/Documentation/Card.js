import React  from "react";
import "./card.css";
    // useEffect(()=>
    // {
    //     console.log("use effect");
    // })

    // const [Docx,SetDocx] = useState([]);
    
export class Card extends React.Component
{
    render()
    {
        return(
            <div className="contain">
                <div className="card">
                    <div className="col">hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque aperiam, quasi harum corporis inventore doloribus quis provident ab explicabo voluptates excepturi ut amet optio est modi sed vel illo sint.</div>
                    <div className="col">hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque aperiam, quasi harum corporis inventore doloribus quis provident ab explicabo voluptates excepturi ut amet optio est modi sed vel illo sint.</div>
                    <div className="col">hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque aperiam, quasi harum corporis inventore doloribus quis provident ab explicabo voluptates excepturi ut amet optio est modi sed vel illo sint.</div>
                </div>
            </div>
        )
    }
}
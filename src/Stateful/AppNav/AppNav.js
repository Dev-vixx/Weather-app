import React from 'react';
import './AppNav.css';
import menu from '../../assets/icons/menu.svg';
import user from '../../assets/icons/user.svg';
import Dock from '../../Stateless/Dock/Dock'; // importing the menu dock for dom
import LandingPage from '../../Stateless/LandingPage/LandingPage';
import map from "../../assets/img/map.png";
import {Switch, Link, NavLink, Route} from "react-router-dom";
import { Index } from '../../Stateless/Api/Index';
import { SignIn } from '../../Stateless/Api/SignIn';
import { Forecast } from '../Forecast/Forecast';

class AppNav extends React.Component
{
    // getting the size ofthe navbar on mount
    componentDidMount()
    {
        let navHeight = document.querySelector("._n_v_b").offsetHeight;
        this.setState({navHeight})//setting the navHeight to the height of the main navigation so as to be inherited
    }
    // state
    state = {
        showDock: false,
        navHeight: null,
    }

    // display dock
    DisplayDock = () =>
    {
        this.setState({showDock: true})
    }

    // hideDock
    HideDock = (e) =>
    {
        this.setState({showDock: false})
    }

    // THIS PAINTS MY DOM FOR ME
    render()
    {
        return(
            <div>
                <nav className="_n_v_b">
                    {/* toggle menu */}
                    <button className="abs menu" onClick={this.DisplayDock}>
                        <img src={menu} alt="toggle menu"/>
                    </button>
                    <div className="abs _b_r_d">
                        <Link to="/">Vicmie Weather</Link>
                    </div>
                    {/* end of the navigation branding here  */}
                    {/* intro to the links */}
                    <div role="navigation" className="links">
                        <div className="_D_F">                        
                            <li><NavLink exact to={{
                                pathname: "/",
                                hash: "#Documentation"
                            }}>documentation</NavLink></li>
                            <li><NavLink exact to="/system api">system api</NavLink></li>
                            <li><NavLink  to="/forecast">forecast</NavLink></li>
                        </div>
                    </div>
                </nav>
                <Dock Display={this.state.showDock}/>
                   {/* landing page here */}
{/* routing */}
                       <Switch>
                            <Route exact path="/" component={()=><LandingPage RemoveDock={this.HideDock} map={map}/>} />
                            <Route exact path="/forecast" render={()=><Forecast topSpace={this.state.navHeight}/>} />
                            <Route exact path="/system api" component={()=><Index RemoveDock={this.HideDock} icon={user} topSpace={this.state.navHeight}/>} />
                            <Route exact path="/sytem api/sign-in" component={()=><SignIn RemoveDock={this.HideDock} icon={user} topSpace={this.state.navHeight}/>} />
                       </Switch>


                       {/* <Route exact path="/" components={<LandingPage  RemoveDock={this.HideDock} map={map}/>} />
                    <Route exact path="/best" render={()=><h1>best man here</h1>} /> */}
                   
            </div>
        )
    }
}

export default AppNav;
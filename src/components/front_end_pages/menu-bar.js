import React from 'react';
import Center from 'react-center';


class MenuBar extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (

            <div  >
                <nav className="nav-primary"  >
                    <div className="container-fluid"  >
                        <div className="navbar-header" style={{ paddingRight: 150 }}  >
                            <a className="navbar-brand" href="#" id="menu-item">Onus</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><a href="/" id="menu-item" >Home</a></li>
                            <li><a href="/about" id="menu-item" >About</a></li>
                            <li><a href="/blog" id="menu-item" >Blog</a></li>
                            <li><a href="/sign_in" id="menu-item" >Sign In</a></li>
                            <li><a href="/sign_up" id="menu-item" >Sign Up</a></li>
                            <li><a href="/user_main" id="menu-item" >User Page</a></li>
                            <li><a href="/user_settings" id="menu-item" >Settings</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default MenuBar
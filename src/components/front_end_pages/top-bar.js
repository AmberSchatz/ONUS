import React from 'react';
import Center from 'react-center';

import { Router } from 'react-router-dom';


import MenuBar from './menu-bar';



class TopBar extends React.Component {
    constructor(props) {
        super(props)

        this.ArrowImg = <img src="https://image.flaticon.com/icons/svg/24/24567.svg" alt="down-arrow" style={{ height: '60px', width: '60px' }} />

        this.Previous = <a  id="previous-text" onClick='' >Previous</a>

    }

    pageName() {

        if (location.pathname === "/about") {
            return "About"
        }
        else if (location.pathname === "/blog") {
            return "Blog"
        }
        else if (location.pathname === "/sign_in") {
            return "Sign In"
        }
        else if (location.pathname === "/sign_up") {
            return "Sign Up"
        }
        else {
            return "Welcome"
        }
    }

    arrowImg() {

        if (location.pathname === "/about") {
            return (
                this.ArrowImg
            )
        }
        else if (location.pathname === "/blog") {
            return (
                this.ArrowImg
            )
        }
        else if (location.pathname === "/sign_in") {
            return (
                this.ArrowImg
            )
        }
        else if (location.pathname === "/sign_up") {
            return (
                this.ArrowImg
            )
        }
        else {
            return null
        }
    }



    previousBtn() {

        if (location.pathname === "/about") {
            return (
                this.Previous
            )
        }
        else if (location.pathname === "/blog") {
            return (
                this.Previous
            )
        }
        else if (location.pathname === "/sign_in") {
            return (
                this.Previous
            )
        }
        else if (location.pathname === "/sign_up") {
            return (
                this.Previous
            )
        }
        else {
            return null
        }
    }

    render() {
        return (
            <div style={{ backgroundImage: "url(' ./tea-image.jpg ')", backgroundSize: '100%, 100%', height: 800 }}>
                <Center>
                    <MenuBar />
                </Center>
                <Center>
                    <div style={{ marginTop: 140 }}>
                        <h1 id="center-text">{this.pageName(this)}</h1>
                        <Center>
                            <div style={{ paddingTop: 240 }} >
                                {this.arrowImg(this)}

                            </div>
                        </Center>
                    </div>
                </Center>
                <div id="prevDiv" >
                    {this.previousBtn()}
                </div>
            </div>
        )
    }
}

export default TopBar
import React from 'react';

import { Link, Switch, Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Center from 'react-center';

import Container from './container'
import SecondContainer from './second_container';


class MainContainer extends React.Component {

    constructor(props) {
        super(props)

        var FirstCont = <Container />
        var SecondCont = <SecondContainer />

    }


    // firstPageRender() {



    //     if (location.pathname === "/") {
    //         return (
    //             this.FirstCont
    //         )
    //     }
    //     else if (location.pathname === "/about") {
    //         return (
    //             this.FirstCont
    //         )
    //     }
    //     else if (location.pathname === "/blog") {
    //         return (
    //             this.FirstCont
    //         )
    //     }
    //     else if (location.pathname === "/sign_in") {
    //         return (
    //             this.FirstCont
    //         )
    //     }
    //     else if (location.pathname === "/sign_up") {
    //         return (
    //             this.FirstCont
    //         )
    //     }

    // }

    // secondPageRender() {
    //     console.log(location.pathname)

    //     if (location.pathname == "/user") {
    //         return (
    //             this.SecondCont
    //         )
    //     }
    //     else if (location.pathname == "/settings") {
    //         return (
    //             <SecondContainer />
    //         )
    //     }
    //     else if (location.pathname == "/journal_directory") {
    //         return (
    //             this.SecondCont
    //         )
    //     }
    //     else if (location.pathname == "/planner_directory") {
    //         return (
    //             this.SecondCont
    //         )
    //     }

    // }


    render() {

        if (location.pathname === "/") {
            return (
                this.FirstCont
            )
        }
        else if (location.pathname === "/about") {
            return (
                this.FirstCont
            )
        }
        else if (location.pathname === "/blog") {
            return (
                this.FirstCont
            )
        }
        else if (location.pathname === "/sign_in") {
            return (
                this.FirstCont
            )
        }
        else if (location.pathname === "/sign_up") {
            return (
                this.FirstCont
            )
        }
        else if (location.pathname == "/user") {
            return (
                this.SecondCont
            )
        }
        else if (location.pathname == "/settings") {
            // return (
            //     // <SecondContainer />
            //     "Hello"
                
            // )
            alert ("Hello")

        }
        else if (location.pathname == "/journal_directory") {
            return (
                this.SecondCont
            )
        }
        else if (location.pathname == "/planner_directory") {
            return (
                this.SecondCont
            )
        }
    }
}

export default MainContainer
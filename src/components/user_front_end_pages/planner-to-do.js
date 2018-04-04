import React, { Component } from 'react';
import BoxLink from './box-link';
import BoxLinkSmall from './box-link-sm';
import Title from './title';
import Header from './header';


class PlannerToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <Header/>
                   To do app needs to go here
                </div>
            </div>

        )
    }
}

export default PlannerToDo;
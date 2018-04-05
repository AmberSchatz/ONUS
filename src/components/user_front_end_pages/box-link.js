import React, { Component } from 'react';
import Center from 'react-center';


class BoxLink extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="col-md-2 card"id="boxLinkStyle">
                <Center>
                    <img src="https://thumb9.shutterstock.com/display_pic_with_logo/3036470/532543942/stock-photo-snowflake-icon-blue-silhouette-snow-flake-sign-isolated-on-white-background-flat-design-symbol-532543942.jpg" style={{width: 100, height: 100, margin: 10}}/>
                </Center>
            </div>

        )
    }
}

export default BoxLink;
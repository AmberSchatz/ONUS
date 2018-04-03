import React from 'react';
import Center from 'react-center';

import MenuBar from './menu-bar';



class TopBar extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (

            <div style={{ backgroundImage: "url(' ./tea-image.jpg ')", backgroundSize: '100%, 100%', height: 620 }}>
                <Center>
                    <MenuBar />
                </Center>
                <Center>
                    <div style={{ marginTop: 140 }}>
                        <h1 id="center-text">{this.props.title}Welcome</h1>
                        <Center>
                            <div style={{ marginBottom: -500 }} >
                                <img src="https://image.flaticon.com/icons/svg/24/24567.svg" alt="down-arrow" style={{ height: '60px', width: '60px' }} />
                            </div>
                        </Center>
                    </div>
                </Center>
            </div>
        )
    }
}

export default TopBar
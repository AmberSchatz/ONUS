import React from 'react';

import Center from 'react-center';



class UserMainPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Center>

                <div className="container-fluid" style={{ paddingTop: 20, paddingLeft: 100 }} >
                    <Center>
                        <div style={{ paddingBottom: 275 }} >
                            <h1 style={{fontSize: 60}} >WELCOME NAME</h1>
                        </div>
                    </Center>
                    <div  >

                        <div>
                            <form className="form-inline" >
                                <div className="form-group">
                                    <img src="./journal.jpg" alt="Journal" id="user-image" className="img-circle" />
                                    <div className="form-group" style={{ paddingLeft: 40 }}  >
                                        <textarea className="form-control" rows="4" style={{ height: 150, width: 350 }} ></textarea>
                                    </div>
                                </div>
                            </form>
                            <form style={{ paddingLeft: 520 }} >

                                <button className="btn" id="edit-btn">EDIT</button>
                            </form>
                        </div>
                        <div style={{ paddingTop: 65 }} className="col-md-12" >
                            <div className="col-sm-6" >
                                <div style={{ paddingLeft: 75 }}   >
                                    <h3>JOURNAL</h3>
                                </div>
                                <br />
                                <textarea name="" id="user-journal-text" cols="35" rows="7"></textarea>
                            </div>
                            <div className="col-sm-6"   style={{ paddingLeft:30 }} >
                                <div style={{ paddingLeft: 75 }}   >
                                    <h3>PLANNER</h3>
                                </div>
                                <br />
                                <textarea name="" id="user-journal-text" cols="35" rows="7"></textarea>
                            </div>
                        </div>
                    </div>

                </div>
            </Center>

        )
    }
}


export default UserMainPage





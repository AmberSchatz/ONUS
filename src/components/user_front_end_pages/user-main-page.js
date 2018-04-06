import React from 'react';
import Center from 'react-center';
import { connect } from 'react-redux';
import axios from 'axios';

import { userDetails } from '../redux/actions';



class UserMainPage extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Center>
                <div className="container-fluid" style={{ paddingTop: 20, paddingLeft: 100 }} >
                    <Center>
                        <div style={{ paddingBottom: 125 }} >
                            <h1 style={{ fontSize: 80 }} id="front-pageText"  >Welcome { this.props.user.name }</h1>
                        </div>
                    </Center>

                    <div>
                        <div>
                            <form className="form-inline" >
                                <div className="form-group">
                                    <img src= {this.props.user.image_url} id="user-image" className="img-circle" />
                                    <div className="form-group" style={{ paddingLeft: 40 }}  >
                                        <textarea className="form-control" rows="4" style={{ height: 150, width: 350 }} defaultValue=""></textarea>
                                    </div>
                                </div>
                            </form>
                            <form style={{ paddingLeft: 520 }} >
                                <button className="btn" id="edit-btn"> EDIT </button>
                            </form>
                        </div>

                        <div style={{ paddingTop: 65 }} className="col-md-12" >

                            <div className="col-sm-6" >
                                <div style={{ paddingLeft: 75 }}   >
                                    <h3> JOURNAL </h3>
                                </div>
                                <br />
                                <textarea id="user-journal-text" cols="35" rows="7" defaultValue=""></textarea>
                            </div>

                            <div className="col-sm-6"   style={{ paddingLeft:30 }} >
                                <div style={{ paddingLeft: 75 }}   >
                                    <h3> PLANNER </h3>
                                </div>
                                <br />
                                <textarea id="user-journal-text" cols="35" rows="7" defaultValue=""></textarea>
                            </div>

                        </div>
                    </div>
                </div>
            </Center>

        )
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/users/' + this.props.userId)
            .then(response => {
                this.props.sendLoggedInUser(response.data);
            })
    }
}


const mapStateToProps = state => {
    return {
        userId: state.userId,
        user: state.user
    }
}


const mapDispatchToProps = dispatch => {
    return {
        sendLoggedInUser: object => dispatch(userDetails(object))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMainPage);
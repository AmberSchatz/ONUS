import React from 'react';
import Center from 'react-center';
import { connect } from 'react-redux';
import axios from 'axios';

import { userDetails } from '../redux/actions';
import Title from './title';
import Header from './header';



class UserMainPage extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Center>
                <div className="container-fluid" style={{ paddingTop: 20, paddingLeft: 100 }} >
                    <Center>
                        <div className="row" style={{ paddingBottom: 125 }} >
                            <Title titleText='Welcome'/>
                            <Title titleText={ this.props.user.name }/>
                        </div>
                    </Center>

                    <div>
                        <div>
                            <form className="form-inline" >
                                <div className="form-group">
                                    <img src= {this.props.user.image_url} id="user-image" className="img-circle" />
                                    <div className="form-group" style={{ paddingLeft: 40 }}  >
                                    <h5 className="positivityCard card" style={{ padding: 40, width: 400 }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, voluptatem at! Harum libero a quaerat delectus excepturi culpa autem, explicabo vero iusto earum officiis tempora eos repellat! Dicta, iste ex.</h5>
                                        {/* <textarea className="form-control" rows="4" style={{ height: 150, width: 350 }} defaultValue=""></textarea> */}
                                    </div>
                                </div>
                            </form>
                            <form style={{ paddingLeft: 587 }} >
                                <button className="btn" id="edit-btn"> Edit </button>
                            </form>
                        </div>

                        <div style={{ paddingTop: 65 }} className="col-md-12" >

                            <div className="col-sm-6" >
                                <div style={{ paddingLeft: 75 }}   >
                                    <Header headerText='JOURNAL'/>
                                </div>
                            </div>

                            <div className="col-sm-6"   style={{ paddingLeft:30 }} >
                                <div style={{ paddingLeft: 75 }}   >
                                <Header headerText='PLANNER'/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Center>

        )
    }

    componentDidMount() {
        axios.get('http://10.0.1.55:5000/api/users/' + this.props.userId)
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
import React from 'react';
import Center from 'react-center';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { loadUser } from '../redux/actions'
import UserMainPage from '../user_front_end_pages/user-main-page'



class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            users: [],
            redirect: false
        }
    }



    render() {

        if (this.state.redirect) {
            return <Redirect to="/user" />;
        }

        return (
            <Center>
                <div style={{ marginBottom: 200 }}>
                    <Center>
                        <div className="form-group" style={{ paddingTop: 50 }} >
                            <Center>
                                <div style={{ paddingBottom: 10 }}>
                                    <label id="front-pageText"> Email </label>
                                </div>
                            </Center>
                            <input onChange={(e) => { this.setState({ email: e.target.value }) }} value={this.state.email} type="email" className='form-control' placeholder='Email Address' />
                        </div>
                    </Center>
                    <div >
                        <Center>
                            <div style={{ paddingTop: 40 }}>
                                <label id="front-pageText"> Password </label>
                            </div>
                        </Center>
                        <div className="form-inline" style={{ paddingTop: 20 }} >
                            <Center>
                                <input onChange={(e) => { this.setState({ password: e.target.value }) }} value={this.state.password} type="password" placeholder="Password" className='form-control' />
                            </Center>
                        </div>
                    </div>

                    <Center>
                        <div style={{ marginTop: 50 }} >
                            <button onClick={ this.logIn.bind(this) } className="btn" style={{ backgroundColor: 'black', fontSize: 25 }} id="menu-item" > SIGN   IN </button>
                        </div>
                    </Center>

                </div>
            </Center>
        )
    }

    componentDidMount() {
        axios.get("http://10.0.1.55:5000/api/users")
            .then(response => {
                var users = response.data
                this.setState({ users: users });
                console.log (this.state.users)
            })
    }
    
    logIn() {
        console.log(this.state.password);
        console.log(this.state.email);

        let found = false;

        for ( var i = 0 ; i < this.state.users.length ; i++) {
            if ( this.state.users[i].email == this.state.email && this.state.users[i].password == this.state.password ) {
                console.log("yay!");
                console.log(this.state.users[i].id);
                this.props.sendStateToRedux(this.state.users[i].id)
                this.setState({redirect: true})
                found = true

                break;
            }
        }

        if (!found) {
            console.log("failed atempt")
        }        
    }
}


const mapDispatchToProps = dispatch => {
    return {
        sendStateToRedux: apiResponse => dispatch(loadUser(apiResponse))
    }
}


export default connect(null, mapDispatchToProps)(SignIn)
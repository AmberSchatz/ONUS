import React from 'react';
import Center from 'react-center';
import { connect } from 'react-redux';
import axios from 'axios'



class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            email: '',
            password: '',
            image_url: '',
            age: 0,
            gender: '',
            goalCalories: 0,
            goalExercise: 0,
            goalMeditationHours: 0,
            goalSleepHours: 0,
            goalCupsOfWater: 0,
            goalSteps: 0,
        }
    }


    render() {
        return (
            <Center>
                <div style={{ marginBottom: 200 }}>
                    <div>
                        <Center>
                            <div style={{ paddingTop: 30 }} >
                                <form>
                                    <Center>
                                        <div className="form-group" style={{ paddingTop: 10 }}>

                                            <div className='form-inline' style={{ paddingTop: 10 }} >
                                                <Center>
                                                    <h2 id="front-pageText"> Enter Name </h2>
                                                </Center>
                                                <input onChange={(e) => { this.setState({ name: e.target.value }) }} value={this.state.name} type="text" className='form-control' placeholder="First Name" />
                                                <input onChange={(e) => { this.setState({ lastName: e.target.value }) }} value={this.state.lastName} type="text" style={{ marginLeft: 20 }} className='form-control' placeholder="Last Name" />
                                            </div>
                                        </div>
                                    </Center>
                                    <Center>
                                        <div className="form-group" style={{ paddingTop: 50 }} >
                                            <Center>
                                                <div style={{ paddingBottom: 10 }}>
                                                    <h2 id="front-pageText"> Email Address </h2>
                                                </div>
                                            </Center>
                                            <input onChange={(e) => { this.setState({ email: e.target.value }) }} value={this.state.email} type="email" className='form-control' placeholder='Email Address' required />
                                        </div>
                                    </Center>
                                    <Center>
                                        <div className="col-lg-12" style={{ paddingTop: 50 }} >
                                            <div className="col-md-6">
                                                <Center>
                                                    <div style={{ paddingBottom: 10 }}>
                                                        <h2 id="front-pageText"> Age </h2>
                                                    </div>
                                                </Center>
                                                <input onChange={(e) => { this.setState({ age: e.target.value }) }} value={this.state.age} type="number" placeholder="Age" className="form-control" />
                                            </div>
                                            <div style={{ paddingLeft: 30 }} className="col-md-6" >
                                                <Center>
                                                    <div style={{ paddingBottom: 10 }}>
                                                        <h2 id="front-pageText"> Gender </h2>
                                                    </div>
                                                </Center>
                                                <input onChange={(e) => { this.setState({ gender: e.target.value }) }} value={this.state.gender} type="text" placeholder="Gender" className="form-control" />
                                            </div>
                                        </div>
                                    </Center>

                                    <div >
                                        <Center>
                                            <div style={{ paddingTop: 40 }}>
                                                <h2 id="front-pageText"> Choose Password </h2>
                                            </div>
                                        </Center>
                                        <div className="form-inline" style={{ paddingTop: 20 }} >
                                            <Center>
                                                <input type="password" placeholder="Password" className='form-control'/>
                                            </Center>
                                        </div>
                                    </div>

                                    <div >
                                        <Center>
                                            <div style={{ paddingTop: 40 }}>
                                                <h2 id="front-pageText"> Confirm Password </h2>
                                            </div>
                                        </Center>
                                        <div className="form-inline" style={{ paddingTop: 20 }} >
                                            <Center>
                                                <input onChange={(e) => { this.setState({ password: e.target.value }) }} value={this.state.password} type="password" placeholder="Confirm Password" className='form-control'/>
                                            </Center>
                                        </div>

                                    </div>

                                    <div >
                                        <Center>
                                            <div style={{ paddingTop: 40 }}>
                                                <h2 id="front-pageText"> Ideal calories </h2>
                                            </div>
                                        </Center>
                                        <div className="form-inline" style={{ paddingTop: 20 }} >
                                            <Center>
                                                <input onChange={(e) => { this.setState({ goalCalories: e.target.value }) }} value={this.state.goalCalories} type="number" className='form-control' />
                                            </Center>
                                        </div>
                                    </div>

                                    <div >
                                        <Center>
                                            <div style={{ paddingTop: 40 }}>
                                                <h2 id="front-pageText"> Ideal hours of exercise </h2>
                                            </div>
                                        </Center>
                                        <div className="form-inline" style={{ paddingTop: 20 }} >
                                            <Center>
                                                <input onChange={(e) => { this.setState({ goalExercise: e.target.value }) }} value={this.state.goalExercise} type="number" className='form-control' />
                                            </Center>
                                        </div>
                                    </div>

                                    <div >
                                        <Center>
                                            <div style={{ paddingTop: 40 }}>
                                                <h2 id="front-pageText"> Ideal hours of meditation </h2>
                                            </div>
                                        </Center>
                                        <div className="form-inline" style={{ paddingTop: 20 }} >
                                            <Center>
                                                <input onChange={(e) => { this.setState({ goalMeditationHours: e.target.value }) }} value={this.state.goalMeditationHours} type="number" className='form-control' />
                                            </Center>
                                        </div>
                                    </div>

                                    <div >
                                        <Center>
                                            <div style={{ paddingTop: 40 }}>
                                                <h2 id="front-pageText"> Ideal hours of sleep </h2>
                                            </div>
                                        </Center>
                                        <div className="form-inline" style={{ paddingTop: 20 }} >
                                            <Center>
                                                <input onChange={(e) => { this.setState({ goalSleepHours: e.target.value }) }} value={this.state.goalSleepHours} type="number" className='form-control' />
                                            </Center>
                                        </div>
                                    </div>

                                    <div>
                                        <Center>
                                            <div style={{ paddingTop: 40 }}>
                                                <h2 id="front-pageText"> Ideal cups of water </h2>
                                            </div>
                                        </Center>
                                        <div className="form-inline" style={{ paddingTop: 20 }} >
                                            <Center>
                                                <input onChange={(e) => { this.setState({ goalCupsOfWater: e.target.value }) }} value={this.state.goalCupsOfWater} type="number" className='form-control' />
                                            </Center>
                                        </div>
                                    </div>

                                    <div >
                                        <Center>
                                            <div style={{ paddingTop: 40 }}>
                                                <h2 id="front-pageText"> Ideal steps </h2>
                                            </div>
                                        </Center>
                                        <div className="form-inline" style={{ paddingTop: 20 }} >
                                            <Center>
                                                <input onChange={(e) => { this.setState({ goalSteps: e.target.value }) }} value={this.state.goalSteps} type="number" className='form-control' />
                                            </Center>
                                        </div>
                                    </div>

                                    <Center>
                                        <div style={{ marginTop: 50 }} >
                                            <button onClick={this.postNewUser.bind(this)} className="btn" style={{ backgroundColor: 'black', fontSize: 25 }} id="menu-item"> SIGN   UP ! ! </button>
                                        </div>

                                    </Center>

                                </form>
                            </div>
                        </Center>
                    </div>
                </div>
            </Center>
        )
    }

    postNewUser() {

        var user = {
            name: this.state.name,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            image_url: this.state.url,
            age: this.state.age,
            gender: this.state.gender,
            goalCalories: this.state.goalCalories,
            goalExercise: this.state.goalExercise,
            goalMeditationHours: this.state.goalMeditationHours,
            goalSleepHours: this.state.goalSleepHours,
            goalCupsOfWater: this.state.goalCupsOfWater,
            goalSteps: this.state.goalSteps,
        }
        axios.post('http://localhost:5000/api/users', user)
            .then(
                console.log(user)
                // axios.get('http://localhost:5000/api/users')
                //     .then(response => {
                //         // this.setState({ users: response.data });
                //         console.log(response.data.length)
                //     })
            )

        alert("user added")    
    }

}

export default SignUp

// const mapStateToProps = state => {
//     return {
//         userId: state.userId
//     }

//     console.log(userId)
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         sendLoggedInUser: object => dispatch(userDetails(object))
//     }
// }

// export default connect(mapStateToProps)(SignUp);

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
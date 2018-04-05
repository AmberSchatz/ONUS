import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positivityInput: 0,
            spentInput: 0,
            savedInput: 0,
            meditationInput: 0,
            sleepInput: 0,
            stepsInput: 0,
            dietInput: 0,
            exerciseInput: 0,
            waterInput: 0
        }
    }
    render() {
        return (
            <div className="row">

                <div className="card col-md-3 entryCard">
                    <div className="container">
                        <h3>Water</h3>
                        <p>How many cup did you drink today?</p>
                        <div className="row">
                            <div className="col-md-3">
                                <input onChange={(e) => { this.setState({ waterInput: e.target.value }) }} value={this.state.waterInput} type="number" className="form-control" placeholder="Calories" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card col-md-3 entryCard">
                    <div className="container">
                        <h3>Exercise</h3>
                        <p>How long did you exercise for today?</p>
                        <div className="row">
                            <div className="col-md-3">
                                <input onChange={(e) => { this.setState({ exerciseInput: e.target.value }) }} value={this.state.exerciseInput} type="number" className="form-control" placeholder="Calories" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card col-md-3 entryCard">
                    <div className="container">
                        <h3>Diet</h3>
                        <p>How many calories did you eat today?</p>
                        <div className="row">
                            <div className="col-md-3">
                                <input onChange={(e) => { this.setState({ dietInput: e.target.value }) }} value={this.state.dietInput} type="number" className="form-control" placeholder="Calories" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card col-md-3 entryCard">
                        <div className="container">
                            <h3>Steps</h3>
                            <p>How many steps did you take today?</p>
                            <div className="row">
                                <div className="col-md-2">
                                    <input onChange={(e) => { this.setState({ stepsInput: e.target.value }) }} value={this.state.stepsInput} type="number" className="form-control" placeholder="Number of Steps" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card col-md-3 entryCard">
                        <div className="container">
                            <h3>Sleep</h3>
                            <p>How long did you sleep for?</p>
                            <div className="row">
                                <div className="col-md-2">
                                    <input onChange={(e) => { this.setState({ sleepInput: e.target.value }) }} value={this.state.sleepInput} type="number" className="form-control" placeholder="Hours of sleep" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card col-md-3 entryCard">
                        <div className="container">
                            <h3>Meditation</h3>
                            <p>How long did you meditate today?</p>
                            <div className="row">
                                <div className="col-md-2">
                                    <input onChange={(e) => { this.setState({ meditationInput: e.target.value }) }} value={this.state.meditationInput} type="number" className="form-control" placeholder="Hours of Meditation" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="card col-md-3 entryCard">
                        <div className="container">
                            <h3>Budget</h3>
                            <p>How much did you save and spend today? </p>
                            <div className="row">
                                <div className="col-md-1">
                                    <input onChange={(e) => { this.setState({ savedInput: e.target.value }) }} value={this.state.savedInput} type="number" className="form-control" placeholder="Saved" />
                                </div>

                                <div className="col-md-1">
                                    <input onChange={(e) => { this.setState({ spentInput: e.target.value }) }} value={this.state.spentInput} type="number" className="form-control" placeholder="Spent" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card col-md-6 positivityCard">
                        <div className="container">
                            <h3>Positivity</h3>
                            <p>List a positive thing that happend today.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea onChange={(e) => { this.setState({ positivityInput: e.target.value }) }} value={this.state.positivityInput} className="form-control" name="positivity" rows="2"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10" style={{ margin: 15 }}>
                        <button onClick={this.submitEntry.bind(this)} className="btn pull-right" type="submit">Submit</button>
                    </div>
                </div>

            </div>
        )
    }

    //make conditionals for the POST


    submitEntry() {

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();


        var date = yyyy + '/' + mm + '/' + dd;



        if (positivityInput.length > 2) {

            var positivity = {
                "dateEntered": date,
                "positivityEntry": sleepInput,
                "userId": userId,
            }

            axios.post('http://localhost:5000/api/postivity', positivity)
                .then(
                    axios.get('http://localhost:5000/api/positivity')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }

        if (spentInput > 0 || savedInput > 0) {

            var budget = {
                "dateEntered": date,
                "savedMoney": savedInput,
                "spentMoney": spentInput,
                "userId": userId,
            }

            axios.post('http://localhost:5000/api/budget', budget)
                .then(
                    axios.get('http://localhost:5000/api/budget')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }

        if (meditationInput > 0) {

            var meditation = {
                "dateEntered": date,
                "meditationHours": sleepInput,
                "userId": userId,
            }

            axios.post('http://localhost:5000/api/meditation', meditation)
                .then(
                    axios.get('http://localhost:5000/api/meditation')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }

        if (sleepInput > 0) {

            var sleep = {
                "dateEntered": date,
                "sleepHours": sleepInput,
                "userId": userId,
            }

            axios.post('http://localhost:5000/api/sleep', sleep)
                .then(
                    axios.get('http://localhost:5000/api/sleep')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }

        if (stepsInput > 0) {

            var steps = {
                "dateEntered": date,
                "stepsTaken": stepsInput,
                "userId": userId,
            }

            axios.post('http://localhost:5000/api/steps', steps)
                .then(
                    axios.get('http://localhost:5000/api/steps')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }

        if (dietInput > 0) {

            var diet = {
                "dateEntered": date,
                "calories": dietInput,
                "userId": userId,
            }

            axios.post('http://localhost:5000/api/diet', diet)
                .then(
                    axios.get('http://localhost:5000/api/diet')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }

        if (exerciseInput > 0) {

            var exercise = {
                "dateEntered": date,
                "exerciseHours": exerciseInput,
                "userId": userId,
            }

            axios.post('http://localhost:5000/api/exercise', exercise)
                .then(
                    axios.get('http://localhost:5000/api/exercise')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }

        if (waterInput > 0) {

            var water = {
                "dateEntered": date,
                "cupsOfWater": waterInput,
                "userId": userId,
            }

            axios.post('http://localhost:5000/api/water', water)
                .then(
                    axios.get('http://localhost:5000/api/water')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }

    }



}



const mapStateToProps = state => {
    return {
        userId: state.userId


    }

    console.log(userId)
}
const mapDispatchToProps = dispatch => {
    return {
        sendLoggedInUser: object => dispatch(userDetails(object))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEntry);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import BoxLink from '../box-link';
import BoxLinkSmall from '../box-link-sm';

import { userDetails } from '../../redux/actions'
import Title from '../title';
import Header from '../header';
import DataDashboard from '../data-dashboard';


class JournalDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            date: '',
            userWater : '',
            userExercise : '',
            userDiet: '',
            userSteps: '',
            userSleep: '',
            userMeditation: '',
            userSpent: '',
            userSaved: '',
            userPositivity: ''
=======
            date:'3-3-18',
            dayOfWeek: 'Monday',
>>>>>>> aad0cc292ecb915b6fe5e7a978e19730ba9e68b6
        }
    }

    render() {
        return (
<div className="row">
                <div className="col-md-12">
<<<<<<< HEAD
                    <Header />
                    <input type="date" className= "input-group date" onChange={(e) => { this.setState({ date: e.target.value }) }} value={this.state.date}/>
                    <button style={{ border: " 1px solid black " }}onClick = { this.dateSubmitted.bind(this) }className="btn"> Submit </button>
=======
                    <Header headerText={this.state.dayOfWeek} />
                    <p>{this.state.date}</p>
>>>>>>> aad0cc292ecb915b6fe5e7a978e19730ba9e68b6
                </div>

                <div className="row">

<<<<<<< HEAD
                <div className="card col-md-3 entryCard" >
                    {/* <div className="container"> */}
                        <h3>Water</h3>
                        <p> {  this.state.userWater } </p>                       
                    {/* </div> */}

                </div>

                <div className="card col-md-3 entryCard">
                    <div className="container">
                        <h3>Exercise</h3>
                        <p> { this.state.userExercise } </p>                       
=======
                    <div className="card col-md-3 entryCard" >
                        <div>
                            <h3>Water</h3>
                            <p>user saved data</p>
                        </div>
                    </div>

                    <div className="card col-md-3 entryCard">
                        <div>
                            <h3>Exercise</h3>
                            <p>user saved data</p>
                        </div>
>>>>>>> aad0cc292ecb915b6fe5e7a978e19730ba9e68b6
                    </div>

<<<<<<< HEAD
                <div className="card col-md-3 entryCard">
                    <div className="container">
                        <h3>Diet</h3>
                        <p> { this.state.userDiet } </p>                       
=======
                    <div className="card col-md-3 entryCard">
                        <div>
                            <h3>Diet</h3>
                            <p>user saved data</p>
                        </div>
>>>>>>> aad0cc292ecb915b6fe5e7a978e19730ba9e68b6
                    </div>
                </div>

                <div className="row">
                    <div className="card col-md-3 entryCard">
                        <div>
                            <h3>Steps</h3>
<<<<<<< HEAD
                            <p> { this.state.userSteps } </p>                       
=======
                            <p>user saved data</p>
>>>>>>> aad0cc292ecb915b6fe5e7a978e19730ba9e68b6
                        </div>
                    </div>

                    <div className="card col-md-3 entryCard">
                        <div>
                            <h3>Sleep</h3>
<<<<<<< HEAD
                            <p> { this.state.userSleep } </p>                       
=======
                            <p>user saved data</p>
>>>>>>> aad0cc292ecb915b6fe5e7a978e19730ba9e68b6
                        </div>
                    </div>

                    <div className="card col-md-3 entryCard">
                        <div>
                            <h3>Meditation</h3>
<<<<<<< HEAD
                            <p> { this.state.userMeditation } </p>                       
=======
                            <p>user saved data</p>
>>>>>>> aad0cc292ecb915b6fe5e7a978e19730ba9e68b6
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="card col-md-3 entryCard">
                        <div>
                            <h3>Budget</h3>
<<<<<<< HEAD
                            <p>Saved:</p>                       
                            <p> { this.state.userSaved } </p>                       
                            <p>Spent:</p>                       
                            <p> { this.state.userSpent } </p>                       
                        </div>
                    </div>

                    <div className="card col-md-6 entryCard">
                        <div className="container">
                            <h3>Positivity</h3>
                            <p> { this.state.userPositivity } </p>                       
=======
                            <p>user saved data</p>
                        </div>
                    </div>

                    <div className="card col-md-6 positivityCard">
                        <div>
                            <h3>Positivity</h3>
                            <p>user saved data</p>
>>>>>>> aad0cc292ecb915b6fe5e7a978e19730ba9e68b6
                        </div>
                    </div>
                </div>

<<<<<<< HEAD
            </div>

                CHART COMPONENTS NEEDED HERE
                <div className="row">
                <div className="">
                {/* <DataDashboard/> */}
                </div>
                </div>
=======
                < div className="row" >
                    <div className="col-md-12">
                        <DataDashboard />
                    </div>
                </div >
>>>>>>> aad0cc292ecb915b6fe5e7a978e19730ba9e68b6

            </div>

        )
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/users/' + this.props.userId)
            .then(response => {
                console.log(response.data)
                this.props.sendLoggedInUser(response.data);
            })
    }

    dateSubmitted(){

        for ( var i = 0 ; i < this.props.user.waterEntries.length ; i++  ) {
            
            var parts =this.state.date.split('/');
            var parts2 =this.props.user.waterEntries[i].dateEntered.substring(0 , 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2 ) {
                { this.setState({ userWater: this.props.user.waterEntries[i].cupsOfWater}) }
            }            
        }

        for ( var i = 0 ; i < this.props.user.exerciseEntries.length ; i++  ) {
            
            var parts =this.state.date.split('/');
            var parts2 =this.props.user.exerciseEntries[i].dateEntered.substring(0 , 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2 ) {
                { this.setState({ userExercise: this.props.user.exerciseEntries[i].exerciseHours}) }
            }            
        }

        for ( var i = 0 ; i < this.props.user.dietEntries.length ; i++  ) {
            
            var parts =this.state.date.split('/');
            var parts2 =this.props.user.dietEntries[i].dateEntered.substring(0 , 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2 ) {
                { this.setState({ userDiet: this.props.user.dietEntries[i].calories}) }
            }            
        }

        for ( var i = 0 ; i < this.props.user.stepsEntries.length ; i++  ) {
            
            var parts =this.state.date.split('/');
            var parts2 =this.props.user.stepsEntries[i].dateEntered.substring(0 , 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2 ) {
                { this.setState({ userSteps: this.props.user.stepsEntries[i].stepsTaken}) }
            }            
        }


        for ( var i = 0 ; i < this.props.user.sleepEntries.length ; i++  ) {
            
            var parts =this.state.date.split('/');
            var parts2 =this.props.user.sleepEntries[i].dateEntered.substring(0 , 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2 ) {
                { this.setState({ userSleep: this.props.user.sleepEntries[i].sleepHours}) }
            }            
        }

        for ( var i = 0 ; i < this.props.user.meditationEntries.length ; i++  ) {
            
            var parts =this.state.date.split('/');
            var parts2 =this.props.user.meditationEntries[i].dateEntered.substring(0 , 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2 ) {
                { this.setState({ userMeditation: this.props.user.meditationEntries[i].meditationHours}) }
            }            
        }

        for ( var i = 0 ; i < this.props.user.budgetEntries.length ; i++  ) {
            
            var parts =this.state.date.split('/');
            var parts2 =this.props.user.budgetEntries[i].dateEntered.substring(0 , 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2 ) {
                { this.setState({ userSpent: this.props.user.budgetEntries[i].spentMoney}) }
                { this.setState({ userSaved: this.props.user.budgetEntries[i].savedMoney}) }
            }            
        }

        for ( var i = 0 ; i < this.props.user.positivityEntries.length ; i++  ) {
            
            var parts =this.state.date.split('/');
            var parts2 =this.props.user.positivityEntries[i].dateEntered.substring(0 , 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2 ) {
                { this.setState({ userPositivity: this.props.user.positivityEntries[i].positivityEntry}) }
            }            
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(JournalDay);
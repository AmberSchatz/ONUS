import React, { Component } from 'react';

class NewEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="row">
                <div className="card col-md-3 entryCard" >
                    <div className="container">
                        <h3>Water</h3>
                        <p>How many cup did you drink today?</p>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="card col-md-3 entryCard">
                    <div className="container">
                        <h3>Exercise</h3>
                        <p>How long did you exercise for today?</p>
                        <div className="col-md-3">
                            <div className="form-group">
                                <select className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                </select>
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
                                <input type="text" className="form-control" placeholder="Calories" />
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
                                    <input type="text" className="form-control" placeholder="Number of Steps" />
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
                                    <input type="text" className="form-control" placeholder="Hours of sleep" />
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
                                    <input type="text" className="form-control" placeholder="Hours of Meditation" />
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
                                    <input type="text" className="form-control" placeholder="Saved" />
                                </div>

                                <div className="col-md-1">
                                    <input type="text" className="form-control" placeholder="Spent" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card col-md-6 positivityCard">
                        <div className="container">
                            <h3>Positivity</h3>
                            <p>List 3 positive things that happend today.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea className="form-control" name="positivity" rows="2"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10" style={{margin:15}}>
                        <button className="btn pull-right" type="submit">Submit</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewEntry;
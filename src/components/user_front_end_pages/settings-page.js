import React from 'react';
import Center from 'react-center';



class SettingsPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Center>
                <div style={{marginBottom: 150}}>
                    <Center>
                        <div style={{ paddingBottom: 170 }} >
                            <h1 style={{ fontSize: 60 }}  >Settings</h1>
                        </div>
                    </Center>

                    <div>

                        <Center>
                            <div style={{ paddingTop: 30 }} >
                                <form>
                                    <Center>
                                        <div className="form-group" style={{ paddingTop: 10 }}>

                                            <div className='form-inline' style={{ paddingTop: 10 }} >
                                                <Center>
                                                        <label htmlFor="" style={{ fontSize: 30 }}  >Name</label>
                                                </Center>
                                                <input type="text" className='form-control' placeholder="First Name" />
                                                <input type="text" style={{ marginLeft: 20 }} className='form-control' placeholder="Last Name" />
                                            </div>
                                        </div>
                                    </Center>

                                    <Center>
                                        <div className="col-lg-12" style={{ paddingTop: 50 }} >
                                            <div className="col-md-6" >
                                                <Center>
                                                    <div style={{ paddingBottom: 10 }}>
                                                        <label htmlFor="" style={{ fontSize: 30 }}  >Age</label>
                                                    </div>
                                                </Center>
                                                <input type="date" name="Age" placeholder="Age" class="form-control" />
                                            </div>
                                            <div style={{ paddingLeft: 30 }} className="col-md-6" >
                                                <Center>
                                                    <div style={{ paddingBottom: 10 }}>
                                                        <label htmlFor="" style={{ fontSize: 30 }}  >Gender</label>
                                                    </div>
                                                </Center>
                                                <select class="form-control" id="gender"  >
                                                    <option>Select</option>
                                                    <option>Female</option>
                                                    <option>Male</option>
                                                    <option>Transgender</option>
                                                    <option>Prefer Not To Specify</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Center>
                                    <Center>
                                        <div className="form-group" style={{ paddingTop: 50 }} >
                                            <Center>
                                                <div style={{ paddingBottom: 10 }}>
                                                    <label htmlFor="" style={{ fontSize: 30 }}  >Email Address</label>
                                                </div>
                                            </Center>
                                            <input type="email" name="Email Adress" className='form-control' placeholder='Email Address' required />
                                        </div>
                                    </Center>
                                    <div >
                                        <Center>
                                            <div style={{ paddingTop: 40 }}>
                                                <label htmlFor="" style={{ fontSize: 30 }}  >Password</label>
                                            </div>
                                        </Center>
                                        <div className="form-inline" style={{ paddingTop: 50 }} >
                                            <Center>
                                                <input type="password" placeholder="Password" className='form-control' required />
                                            </Center>
                                        </div>
                                        <div className="form-inline" style={{ paddingTop: 50 }} >
                                            <Center>
                                                <input type="password" placeholder=" Confirm Password" className='form-control' required />
                                            </Center>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </Center>
                    </div>

                </div>
            </Center>
        )
    }
}


export default SettingsPage
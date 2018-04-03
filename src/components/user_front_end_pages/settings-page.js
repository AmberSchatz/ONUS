import React from 'react';
import Center from 'react-center';


class SettingsPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Center>
                    <div>
                        <h2 style={{ fontFamily: "'Flavors',cursive", fontSize: 65, color: 'green' }}>SIGN  UP TO ROLL UP</h2>
                    </div>
                </Center>
                <Center>
                    <div style={{ marginTop: 30 }} >
                        <form>
                            <div className="form-group">
                                <Center>
                                    <div>
                                        <label htmlFor="" style={{ fontFamily: "'Nanum Brush Script',cursive", fontSize: 45, color: 'green' }}>Enter Name</label>
                                    </div>
                                </Center>
                                <div className='form-inline' style={{ marginTop: 10 }} >

                                    <label htmlFor="" style={{ fontFamily: "'Nanum Brush Script',cursive", fontSize: 45, color: 'green' }}>First</label>
                                    <input type="text" style={{ marginLeft: 10 }} className='form-control' placeholder="First Name" />

                                    <label htmlFor="" style={{ paddingLeft: 15, fontFamily: "'Nanum Brush Script',cursive", fontSize: 45, color: 'green' }}>Last</label>
                                    <input type="text" style={{ marginLeft: 10 }} className='form-control' placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="form-group" style={{ marginTop: 50 }} >
                                <Center>
                                    <div>
                                        <label htmlFor="" style={{ fontFamily: "'Nanum Brush Script',cursive", fontSize: 45, color: 'green' }}>Enter Username</label>
                                    </div>
                                </Center>

                                <input type="text" style={{ marginLeft: 10 }} className='form-control' placeholder="Username" />
                            </div>
                            <div className="form-group" style={{ marginTop: 50 }} >
                                <Center >
                                    <label htmlFor="" style={{ fontFamily: "'Nanum Brush Script',cursive", fontSize: 45, color: 'green' }}>Date Of Birth</label>
                                    <div style={{ paddingLeft: 50 }} >
                                        <input type="date" name="Birthdate" className='form-control' required />
                                    </div>
                                </Center>
                            </div>
                            <div className="form-group" style={{ marginTop: 50 }} >
                                <Center>
                                    <div style={{ marginBottom: 10 }}>
                                        <label htmlFor="" style={{ fontFamily: "'Nanum Brush Script',cursive", fontSize: 45, color: 'green' }}>Enter Email Address</label>
                                    </div>
                                </Center>
                                <input type="email" name="Email Adress" className='form-control' placeholder='Email Address' required />
                            </div>
                            <div className="form-inline" style={{ marginTop: 50 }} >
                                <Center>
                                    <label htmlFor="" style={{ paddingRight: 50, fontFamily: "'Nanum Brush Script',cursive", fontSize: 45, color: 'green' }} >Enter Password</label>
                                    <input type="password" name="Password" className='form-control' required />
                                </Center>
                            </div>
                            <div className="form-inline" style={{ marginTop: 50 }} >
                                <Center>
                                    <label htmlFor="" style={{ paddingRight: 50, fontFamily: "'Nanum Brush Script',cursive", fontSize: 45, color: 'green' }}>Confirm Password</label>
                                    <input type="password" name="Password" className='form-control' required />
                                </Center>
                            </div>
                            <Center>
                                <div className="form-group" style={{ marginTop: 50 }} >
                                    <label htmlFor="" style={{ fontFamily: "'Nanum Brush Script',cursive", fontSize: 45, color: 'green' }}>Upload Recommendation</label>
                                    <Center>
                                        <input type="file" name="" />
                                    </Center>
                                </div>
                            </Center>
                            <Center>
                                <div className="form-group" style={{ marginTop: 50 }} >
                                    <label htmlFor="" style={{ fontFamily: "'Nanum Brush Script',cursive", fontSize: 45, color: 'green' }}>Upload Photo ID</label>
                                    <Center>
                                        <input type="file" name="" />
                                    </Center>
                                </div>
                            </Center>
                            <Center>
                                <div style={{marginTop: 45, marginBottom:75 }}  >
                                    <button type="submit" className='btn' style={{ backgroundColor: 'green', color: 'black', fontFamily: "'Nanum Brush Script',cursive", fontSize: 25 }}>CREATE ACCOUNT</button>
                                </div>
                            </Center>
                        </form>
                    </div>
                </Center>
            </div>
        )
    }
}


export default SettingsPage
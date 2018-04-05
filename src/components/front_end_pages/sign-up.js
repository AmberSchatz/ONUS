import React from 'react';
import Center from 'react-center';



class SignUP extends React.Component {
    constructor(props) {
        super(props)
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
                                                    <h2 htmlFor="" id="front-pageText"  > Enter Name</h2>
                                                </Center>
                                                <input type="text" className='form-control' placeholder="First Name" />
                                                <input type="text" style={{ marginLeft: 20 }} className='form-control' placeholder="Last Name" />
                                            </div>
                                        </div>
                                    </Center>
                                    <Center>
                                        <div className="form-group" style={{ paddingTop: 50 }} >
                                            <Center>
                                                <div style={{ paddingBottom: 10 }}>
                                                    <h2 htmlFor="" id="front-pageText"  >Email Address</h2>
                                                </div>
                                            </Center>
                                            <input type="email" name="Email Adress" className='form-control' placeholder='Email Address' required />
                                        </div>
                                    </Center>
                                    <Center>
                                        <div className="col-lg-12" style={{ paddingTop: 50 }} >
                                            <div className="col-md-6" >
                                                <Center>
                                                    <div style={{ paddingBottom: 10 }}>
                                                        <h2 htmlFor="" id="front-pageText"  >Age</h2>
                                                    </div>
                                                </Center>
                                                <input type="date" name="Age" placeholder="Age" class="form-control" />
                                            </div>
                                            <div style={{ paddingLeft: 30 }} className="col-md-6" >
                                                <Center>
                                                    <div style={{ paddingBottom: 10 }}>
                                                        <h2 htmlFor="" id="front-pageText"  >Gender</h2>
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

                                    <div >
                                        <Center>
                                            <div style={{ paddingTop: 40 }}>
                                                <h2 htmlFor="" id="front-pageText"  >Choose Password</h2>
                                            </div>
                                        </Center>
                                        <div className="form-inline" style={{ paddingTop: 20 }} >
                                            <Center>
                                                <input type="password" placeholder="Password" className='form-control' required />
                                            </Center>
                                        </div>

                                    </div>

                                    <div >
                                        <Center>
                                            <div style={{ paddingTop: 40 }}>
                                                <h2 htmlFor="" id="front-pageText"  >Confirm Password</h2>
                                            </div>
                                        </Center>
                                        <div className="form-inline" style={{ paddingTop: 20 }} >
                                            <Center>
                                                <input type="password" placeholder=" Confirm Password" className='form-control' required />
                                            </Center>
                                        </div>

                                    </div>
                                    <Center>
                                        <div style={{ marginTop: 50 }} >
                                            <a href="/user">
                                                <button className="btn" style={{ backgroundColor: 'black', fontSize: 25 }} id="menu-item" > SIGN   UP ! ! </button>
                                            </a>
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
}

export default SignUP
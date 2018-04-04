import React from 'react';
import Center from 'react-center';



class SignIn extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <Center>
                <div style={{ marginBottom: 200 }}>
                    <Center>
                        <div className="form-group" style={{ paddingTop: 50 }} >
                            <Center>
                                <div style={{ paddingBottom: 10 }}>
                                    <label htmlFor="" id="front-pageText"  >Email </label>
                                </div>
                            </Center>
                            <input type="email" name="Email Adress" className='form-control' placeholder='Email Address' required />
                        </div>
                    </Center>
                    <div >
                        <Center>
                            <div style={{ paddingTop: 40 }}>
                                <label htmlFor="" id="front-pageText"  >Password</label>
                            </div>
                        </Center>
                        <div className="form-inline" style={{ paddingTop: 20 }} >
                            <Center>
                                <input type="password" placeholder="Password" className='form-control' required />
                            </Center>
                        </div>

                    </div>
                    <Center>
                        <div style={{ marginTop: 50 }} >
                            <a href="/user">
                                <button className="btn" style={{ backgroundColor: 'black', fontSize: 25 }} id="menu-item" > SIGN   IN </button>
                            </a>
                        </div>
                    </Center>

                </div>
            </Center>
        )
    }
}

export default SignIn
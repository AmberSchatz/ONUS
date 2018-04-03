import React from 'react';

import Center from 'react-center';


class UserMainPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="container" style={{ marginTop: 200, marginLeft: 380 }} >
                    <form className="form-inline" >
                        <div className="form-group">
                            <img src="./journal.jpg" alt="Journal" id="user-image" className="img-circle" />
                            <div className="form-group" style={{ paddingLeft: 40 }}  >
                                <textarea className="form-control" rows="4" style={{height:150, width: 350 }} ></textarea>
                            </div>
                        </div>
                    </form>
                    <form style={{marginLeft:520
                    
                    }} >
                        <button  className="btn" id="edit-btn">EDIT</button>
                    </form>
                </div>
            </div>

        )
    }
}


export default UserMainPage
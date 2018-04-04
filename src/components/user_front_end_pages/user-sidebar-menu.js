import React, { Component } from 'react';

class UserSideBarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    dropdownClick() {
        var dropdown = document.getElementsByClassName("dropdown-btn");

        for (var i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    }


    render() {
        return (
            <div className="sidenav">
            <img id="placeholderImg" src="http://www.hsdtaxlaw.com/wp-content/uploads/2016/05/20140806_LogoSupporterPlaceholder.png"/>

                <a href="#">Home</a>
                <a href="#">Settings</a>
                <button className="dropdown-btn" onClick={this.dropdownClick}>Journal
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-container">
                    <a href="#">View Directory</a>
                    <a href="#">Make New Entry</a>                   
                </div>
                <button className="dropdown-btn" onClick={this.dropdownClick}>Planner
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-container">
                    <a href="#">Todo List</a>
                    <a href="#">Add New Planner</a>
                </div>
            </div>

        )

    }
}

export default UserSideBarMenu
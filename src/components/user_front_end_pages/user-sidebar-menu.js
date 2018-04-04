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
            <div>
                <div className="sidenav">
                    <img id="placeholderImg" src="journal.jpg" className="img-thumbnail" />

                    <a href="/user">Home</a>
                    <a href="/user_settings">Settings</a>
                    <button className="dropdown-btn" onClick={this.dropdownClick}>Dropdown
                <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-container">
                        <a href="#">View Entry</a>
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
            </div>

        )

    }
}

export default UserSideBarMenu
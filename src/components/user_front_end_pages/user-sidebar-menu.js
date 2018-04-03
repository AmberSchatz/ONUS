import React, { Component } from 'react';

class UserSidebarMenu extends Component {
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
            <div class="sidenav">
            <img id="placeholderImg" src="http://www.hsdtaxlaw.com/wp-content/uploads/2016/05/20140806_LogoSupporterPlaceholder.png"/>

                <a href="#">Home</a>
                <a href="#">Settings</a>
                <button class="dropdown-btn" onClick={this.dropdownClick}>Dropdown
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-container">
                    <a href="#">View Entry</a>
                    <a href="#">Make New Entry</a>                   
                </div>
                <button class="dropdown-btn" onClick={this.dropdownClick}>Planner
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-container">
                    <a href="#">Todo List</a>
                    <a href="#">Add New Planner</a>
                </div>
            </div>
        )

    }
}

export default UserSidebarMenu;
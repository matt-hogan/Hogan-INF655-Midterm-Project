import React from "react";
import { Component } from "react";

export default class MyClassCom extends Component {
    render () {
        const tasks = ["Office work", "Garden", "Car Repair"];
        let itemList = tasks.map((task, index) => {
            return <li key={index}>{task}</li>
        });
        return (
            <span>{itemList}</span>
        );
    }
}
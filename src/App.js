import React, {Component} from "react";
import {Navbar} from "./component/navbar";
import {TodoRows} from "./component/TodoRows";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: 'Zander',
            todoItems: [
                {action: 'Buy Milk', done: true},
                {action: 'Dentist at 5pm', done: false},
                {action: 'Go to Gym', done: false},],
            newToDo: "",
        };
    }

    updateValue = (event) => {
        this.setState({newToDo: event.target.value});
    };


    newToDo = () => {
        this.setState({
            todoItems: [
                ...this.state.todoItems,
                {action: this.state.newToDo, done: false},
            ]
        });
    }


    todoRows = () =>
        this.state.todoItems.map((item) => (
            <TodoRows key={item.action} item={item} callback={this.toggleDone}/>
        ));

    toggleDone = (todo) =>
        this.setState({
            todoItems: this.state.todoItems.map((item) =>
                item.action === todo.action ? {...item, done: !item.done} : item),
        });

    render = () => (
        <div className="container">
            <div className="row">
                <Navbar name={this.state.userName}/>
                <div className={"col-12"}>
                    <input
                        className={"form-control"}
                        value={this.state.newToDo}
                        onChange={this.updateValue}
                    />
                    <button className={"btn btn-primary"} onClick={this.newToDo}>
                        Add
                    </button>
                </div>
                <div>
                    <table className={"col-12"}>
                        <thead>
                        <tr>
                            <th>Task</th>
                            <th>Complete</th>
                        </tr>
                        </thead>
                        <tbody>{this.todoRows()}</tbody>
                    </table>
                </div>
            </div>
        </div>
    )


}
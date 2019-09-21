import React, { Component } from 'react';
import './Task.css';

export default class TaskForm extends Component {
    /**State para cada componente */

    state = {
        title: '',
        description: ''
    }

    /** Funciones escuchando los eventos de cada componente del frame */
    onSubmit = e => {
        //console.log(this.state)
        //Llamando la funcion addTask hecha en App.js
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }

    onChange = e => {
        //console.log(e.target.value);
        //console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="frm">
                <input
                    type="text"
                    name="title"
                    placeholder="Write a Task"
                    onChange={this.onChange}
                    value={this.state.title}
                />
                <br />
                <br />
                <textarea
                    name="description"
                    placeholder="Write a Description"
                    onChange={this.onChange}
                    value={this.state.description}
                />
                <br />
                <br />
                <input type="submit" value="Send a Task" />
            </form>
        )
    }
}

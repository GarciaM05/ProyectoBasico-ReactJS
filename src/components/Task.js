import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
    //Utilizando una funcion para llamar los estilos
    styleCompleted() {
        return {
            fontSize: '30px',
            /*Haciendo una condicional
                Si la propiedad done de la tarea que pasamos
                es true, pintarlo de gris, de lo contrario, pintalor de negro
            */
            color: this.props.task.done ? 'gray' : 'black',
            /** line-through: texto con linea en medio */
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
    render() {
        const { task } = this.props;
        //ClassName estilizando via CSS
        return <p className="div-color" style={this.styleCompleted()}>
            {/*             {this.props.task.title} -
            {this.props.task.description} -
            {this.props.task.done} -
            {this.props.task.id} <br /> */}
            {task.title} -
            {task.description} -
            {task.done} -  
            {task.id} -
            <input type="checkbox"
                onChange={this.props.checkDone.bind(this, task.id)}
            />
            <button style={btnDelete}
                onClick={this.props.deleteTask.bind(this, task.id)}>
                Delete
            </button>
        </p>
    }
}
//Utilizando objetos de JS para estilizar 
const btnDelete = {
    fontSize: '18px',
    background: '#000000',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    padding: '10px 15px',
    borderRadius: '50%'
}

export default Task;
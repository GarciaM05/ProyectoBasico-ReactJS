import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
import Encabezado from './components/Encabezado';
import TaskForm from './components/TaskForm';
import Post from './components/Post';


/* function Helloworld(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.text}
    </div>
  );
}
class Helloworld extends React.Component {
  state = {
    show: true
  }
  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }
  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.text}
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      );
    } else {
      return <h1>
        There are not elements
        <button onClick={this.toggleShow}>Toggle Show</button>
      </h1>
    }
  }
}


function App() {
  return (
    <div> Componentes: <Helloworld text="React" subtitle="Tecnologia Usada" />
      <Helloworld text="JS" />
      <Helloworld text="Native" />
    </div>
  );
} */
class App extends Component {
  state = {
    tasks: tasks
  }
  /**Funcion paa agregar tareas del Form */
  addTask = (title, description) => {
    //console.log(title, description);
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    //console.log(newTask);
    //agregando la nueva tarea al arreglo
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newTasks });
  }
  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({ tasks: newTasks });
  }
  render() {
    return <div>
      <Router>
        <Link to="/">Home</Link> <br/>
        <Link to="/posts">Posts</Link>
        <Route exact path="/" render={() => {
          return <div>
            <Encabezado />
            <br />
            <TaskForm addTask={this.addTask} />
            <Tasks
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              checkDone={this.checkDone}
            />
          </div>
        }}>
        </Route>
        <Route path="/posts" component={Post} />
      </Router>

    </div>
  }
}
export default App;

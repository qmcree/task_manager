import axios from 'axios';
import React, {Component} from 'react';
import '../styles/App.css';
import UserList from "./UserList";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }

    static getUsers() {
        return axios.get('http://localhost:8080/users/');
    }

    componentDidMount() {
        App.getUsers().then((response) => {
            this.setState({
                users: response.data.users,
            });
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Task Manager</h1>
                </header>
                <UserList users={this.state.users}/>
            </div>
        );
    }
}

export default App;

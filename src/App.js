import React, {Component} from 'react';
import Routes from './Routes'
import './App.scss'
import 'antd/dist/antd.css'
class App extends Component {
    render() {
        return (
            <div className="App">
                <Routes/>
            </div>
        );
    }
}

export default App;

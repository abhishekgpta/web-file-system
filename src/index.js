import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import getSampleFileSystem from './utils/fileSystemData';
import rootReducer from './reducer/index';

let fs = localStorage.getItem('fileSystem');
if(!fs){
    fs = getSampleFileSystem();
}
else{
    fs = JSON.parse(fs)
}
const store = createStore(
    rootReducer,
    {
        fileSystem:fs

    }
);

ReactDOM.render(<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

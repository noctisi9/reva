import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components';
import { HomePage, AboutPage } from './pages';
import './styles/main.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
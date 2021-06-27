import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Header, Footer } from './../layout/index'
import Home from './../views/home';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    )
}

export default AppRouter

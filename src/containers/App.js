import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import MainApp from 'app/index';
import 'react-big-calendar/lib/less/styles.less';
import 'styles/bootstrap.scss'
import 'styles/app.scss';
import defaultTheme from './themes/defaultTheme';


class App extends Component {

    render() {
        const {match, location} = this.props;

        if (location.pathname === '/') {
            return ( <Redirect to={'/profile'}/> );
        }
        return (
            <MuiThemeProvider theme={createMuiTheme(defaultTheme)}>
                <div className="app-main">
                    <Route path={`${match.url}`} component={MainApp}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = ({settings}) => {
    const {sideNavColor} = settings;
    return {sideNavColor}
};

export default withRouter(connect(mapStateToProps)(App));



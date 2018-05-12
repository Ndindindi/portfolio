import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {toggleCollapsedNav} from 'actions/index';
import Header from 'components/Header/index';
import Sidebar from 'containers/SideNav/index';
import Footer from 'components/Footer';
import {isIOS, isMobile} from 'react-device-detect';
import {COLLAPSED_DRAWER, FIXED_DRAWER} from 'constants/ActionTypes';
import Profile from 'app/routes/Profile';
import Experience from 'app/routes/Experience/index';
import Referees from 'app/routes/Referees';
import ChatPanel from 'app/routes/ChatPanel/basic/index';
import KeySkills from 'app/routes/Key Skills';
import Education from './routes/Education';
import About from 'app/routes/About Me';


class App extends React.Component {
    onToggleCollapsedNav = (e) => {
        const val = !this.props.navCollapsed;
        this.props.toggleCollapsedNav(val);
    };


    render() {
        const {match, drawerType} = this.props;
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'fixed-drawer' : drawerType.includes(COLLAPSED_DRAWER) ? 'collapsible-drawer' : 'mini-drawer';
        //set default height and overflow for iOS mobile Safari 10+ support.
        if (isIOS && isMobile) {
            $('#body').addClass('ios-mobile-view-height')
        }
        else if ($('#body').hasClass('ios-mobile-view-height')) {
            $('#body').removeClass('ios-mobile-view-height')
        }
        return (
            <div className={`app-container ${drawerStyle}`}>
                <Sidebar onToggleCollapsedNav={this.onToggleCollapsedNav.bind(this)}/>
                <div className="app-main-container">
                    <main className="app-main-content-wrapper">
                        <div className="app-main-content">
                            <Route path={`${match.url}profile`} component={Profile}/>
                            <Route path={`${match.url}about`} component={About}/>
                            <Route path={`${match.url}experience`} component={Experience}/>
                            <Route path={`${match.url}referee`} component={Referees}/>
                            <Route path={`${match.url}skills`} component={KeySkills}/>
                            <Route path={`${match.url}chat`} component={ChatPanel}/>
                            <Route path={`${match.url}education`} component={Education}/>
                        </div>
                        <Footer/>
                    </main>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({settings}) => {
    const {navCollapsed, drawerType} = settings;
    return {navCollapsed, drawerType}
};
export default connect(mapStateToProps, {toggleCollapsedNav})(App);
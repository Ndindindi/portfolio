import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import 'jquery-slimscroll/jquery.slimscroll.min';
import {Animated} from 'react-animated-css';


class SideNavContent extends Component {
    componentDidMount() {
        const {history} = this.props;
        const $nav = $(this.nav);
        const slideDuration = 250;

        $nav.slimscroll({
            height: '100%'
        });

        const pathname = `#${history.location.pathname}`;// get current path

        $('ul.nav-menu > li.menu').click(function () {
            const menuLi = this;
            $('ul.nav-menu > li.menu').not(menuLi).removeClass('open');
            $('ul.nav-menu > li.menu ul').not($('ul', menuLi)).slideUp(slideDuration);
            $('> ul', menuLi).slideToggle(slideDuration);
            $(menuLi).toggleClass('open');
        });

        $('ul.sub-menu li').click(function (e) {
            let superSubMenu = $(this).parent();
            if (superSubMenu.parent().hasClass('active')) {
                $('li', superSubMenu).not($(this)).removeClass('active');
            }
            else {
                $('ul.sub-menu li').not($(this)).removeClass('active');
            }

            $(this).toggleClass('active');
            e.stopPropagation();
        });

        const activeLi = $('a[href="' + pathname + '"]');// select current a element
        const activeNav = activeLi.closest('ul'); // select closest ul
        if (activeNav.hasClass('sub-menu')) {
            activeNav.slideDown(slideDuration);
            activeNav.parent().addClass('open');
            activeLi.parent().addClass('active');
        } else {
            activeLi.parent().addClass('open');
        }
    }


    render() {
        return (
            <ul className="nav-menu" ref={(c) => {
                this.nav = c;
            }}>

                <li className="nav-header"></li>

                <li className="menu no-arrow">
                    <Link to="/profile">
                        <Animated
                            animationIn="bounceInLeft"
                            animationOut="fadeOut" isVisible={true}
                            animationInDelay={1}
                            animationOutDelay={1}
                            style={{display: 'inline'}}>
                            <i className="zmdi zmdi-codepen zmdi-hc-fw"/>
                        </Animated>
                        <span className="nav-text"> Profile </span>
                    </Link>
                </li>
                <li className="menu no-arrow">
                    <Link to="/about">
                        <i className="zmdi zmdi-face zmdi-hc-fw"/>
                        <span className="nav-text"> About Me </span>
                    </Link>
                </li>
                <li className="menu no-arrow">
                    <Link to="/skills">
                        <i className="zmdi zmdi-code zmdi-hc-fw"/>
                        <span className="nav-text"> Key Skills </span>
                    </Link>
                </li>
                <li className="menu no-arrow">
                    <Link to="/education">
                        <i className="zmdi zmdi-graduation-cap zmdi-hc-fw"/>
                        <span className="nav-text"> Education </span>
                    </Link>
                </li>
                <li className="menu no-arrow">
                    <Link to="/experience">
                        <i className="zmdi zmdi-laptop zmdi-hc-fw"/>
                        <span className="nav-text"> Work Experience </span>
                    </Link>
                </li>
                <li className="menu no-arrow">
                    <Link to="/referee">
                        <i className="zmdi zmdi-accounts zmdi-hc-fw"/>
                        <span className="nav-text"> Referees </span>
                    </Link>
                </li>

            </ul>
        );
    }
}

export default withRouter(SideNavContent);

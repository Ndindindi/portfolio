import React from 'react';
import Avatar from 'material-ui/Avatar'
import Menu, {MenuItem} from 'material-ui/Menu';


class UserInfo extends React.Component {

    state = {
        anchorEl: null,
        open: false,
    };

    handleClick = event => {
        this.setState({open: true, anchorEl: event.currentTarget});
    };

    handleRequestClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div className="user-profile d-flex flex-row align-items-center">
                <Avatar
                    alt='...'
                    src='http://via.placeholder.com/256x256'
                    className="user-avatar "
                />
                <div className="user-detail">
                    <h4 className="user-name" onClick={this.handleClick}>Ndimbumi Mwaitenda <i
                        className="zmdi zmdi-caret-down zmdi-hc-fw align-middle"/>
                    </h4>
                </div>
                <Menu className="user-info"
                      id="simple-menu"
                      anchorEl={this.state.anchorEl}
                      open={this.state.open}
                      onClose={this.handleRequestClose}
                      PaperProps={{
                          style: {
                              width: 120,
                              paddingTop: 0,
                              paddingBottom: 0
                          }
                      }}
                >

                    <MenuItem onClick={this.handleRequestClose}><i
                        className="zmdi zmdi-settings zmdi-hc-fw mr-2"/>Setting
                    </MenuItem>

                </Menu>
            </div>
        );
    }
}

export default UserInfo;


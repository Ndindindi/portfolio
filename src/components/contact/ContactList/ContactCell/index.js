import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import Menu, {MenuItem} from 'material-ui/Menu';
import AddContact from "../../AddContact/index";

class ContactCell extends React.Component {

    onContactOptionSelect = event => {
        this.setState({menuState: true, anchorEl: event.currentTarget});
    };
    handleRequestClose = () => {
        this.setState({menuState: false});
    };
    onContactClose = () => {
        this.setState({addContactState: false});
    };
    onDeleteContact = (contact) => {
        this.setState({addContactState: false});
        this.props.onDeleteContact(contact);
    };
    onEditContact = () => {
        this.setState({menuState: false, addContactState: true});
    };

    constructor() {
        super();
        this.state = {
            anchorEl: undefined,
            menuState: false,
            addContactState: false,
        }
    }

    render() {
        const {contact, addFavourite, onContactSelect, onSaveContact} = this.props;
        const {menuState, anchorEl, addContactState} = this.state;
        const {name, thumb, email, phone, designation, starred} = contact;
        const ITEM_HEIGHT = 40;
        const options = [
            'Edit',
            'Delete',
        ];
        return (

            <div className="contact-item">

                <Checkbox
                    checked={contact.selected}
                    value="checkedF"
                    onClick={() => {
                        onContactSelect(contact)
                    }}
                />
                {(thumb === null || thumb === '') ?
                    <div className="rounded-circle size-40 bg-blue text-center text-white mx-4" style={{fontSize: 20}}>
                        {name.charAt(0).toUpperCase()}
                    </div> :
                    <img className="rounded-circle size-40 mx-3" alt={name} src={thumb}/>}

                <div className="col text-truncate contact-name">{name}</div>


                <div className="col email text-truncate px-1 d-none d-lg-flex">
                    {email}
                </div>

                <div className="col phone text-truncate px-1 d-none d-md-flex">
                    {phone}
                </div>

                <div className="col job-title text-truncate px-1 d-none d-sm-flex">
                    {designation}
                </div>


                <div className="col-auto px-1 actions d-none d-xs-flex">
                    <IconButton onClick={() => {
                        addFavourite(contact)
                    }}>
                        {starred ? <i className="zmdi zmdi-star"/> : <i className="zmdi zmdi-star-outline"/>}
                    </IconButton>

                    <IconButton onClick={this.onContactOptionSelect}>
                        <i className="zmdi zmdi-more-vert"/>
                    </IconButton>

                    <Menu id="long-menu"
                          anchorEl={anchorEl}
                          open={menuState}
                          onClose={this.handleRequestClose}
                          style={{maxHeight: ITEM_HEIGHT * 4.5}}
                          MenuListProps={{
                              style: {
                                  width: 100,
                              },
                          }}>
                        {options.map(option =>
                            <MenuItem key={option} onClick={() => {
                                if (option === 'Edit') {
                                    this.onEditContact()
                                } else {
                                    this.handleRequestClose();
                                    this.onDeleteContact(contact)
                                }
                            }
                            }>
                                {option}
                            </MenuItem>,
                        )}
                    </Menu>
                    {addContactState &&
                    <AddContact open={addContactState} contact={contact} onSaveContact={onSaveContact}
                                onContactClose={this.onContactClose} onDeleteContact={this.onDeleteContact}/>}
                </div>
            </div>
        )
    }
}

export default ContactCell;
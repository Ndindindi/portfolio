import React from 'react';
import {Modal, ModalHeader} from 'reactstrap';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

import CloseIcon from 'material-ui-icons/Close';
import Delete from 'material-ui-icons/Delete';

class AddContact extends React.Component {
    constructor(props) {
        super(props);

        const {id, thumb, name, email, phone, designation, selected, starred, frequently} = props.contact;
        console.log(id);
        this.state = {
            id,
            thumb,
            name,
            email,
            phone,
            designation,
            selected,
            starred,
            frequently
        }
    }

    render() {
        const {onSaveContact, onDeleteContact, onContactClose, open, contact} = this.props;
        const {id, name, email, phone, designation, selected, starred, frequently} = this.state;
        let {thumb} = this.state;
        if (!thumb) {
            thumb = "http://via.placeholder.com/256x256";
        }
        return (
            <Modal className="modal-box" toggle={onContactClose} isOpen={open}>
                <ModalHeader className="modal-box-header bg-primary">
                    {contact.name === '' ? "Add New" : "Edit Contact"}
                    <IconButton className="text-white"
                                onClick={onContactClose}>
                        <CloseIcon/>
                    </IconButton>
                </ModalHeader>

                <div className="modal-box-content d-flex flex-column">
                    <img className="rounded-circle avatar size-80" src={thumb}/>

                    <TextField
                        required
                        id="required"
                        label="Name"
                        onChange={(event) => this.setState({name: event.target.value})}
                        defaultValue={name}
                        margin="normal"/>
                    <TextField
                        id="required"
                        label="Email"
                        onChange={(event) => this.setState({email: event.target.value})}
                        value={email}
                        margin="normal"/>
                    <TextField
                        id="required"
                        label="Phone"
                        onChange={(event) => this.setState({phone: event.target.value})}
                        value={phone}
                        margin="normal"
                    />
                    <TextField
                        id="required"
                        label="Designation"
                        onChange={(event) => this.setState({designation: event.target.value})}
                        value={designation}
                        multiline
                        rowsMax="4"
                        margin="normal"/>
                </div>

                <div className="modal-box-footer d-flex flex-row">
                    <Button disabled={name === ''} variant="raised" color="primary" onClick={() => {
                        onContactClose();
                        onSaveContact(
                            {
                                'id': id,
                                'name': name,
                                'thumb': thumb,
                                'email': email,
                                'phone': phone,
                                'designation': designation,
                                'selected': selected,
                                'starred': starred,
                                'frequently': frequently
                            });
                        this.setState({
                            'id': id + 1,
                            'name': '',
                            'thumb': '',
                            'email': '',
                            'phone': '',
                            'designation': '',
                        })

                    }}>Save Contact</Button>

                    <IconButton onClick={() => onDeleteContact(contact)}>
                        <Delete/>
                    </IconButton>
                </div>
            </Modal>
        );
    }
}

export default AddContact;
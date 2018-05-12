import React from 'react';
import {Modal, ModalHeader} from 'reactstrap';
import Moment from 'moment';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import AttachFile from 'material-ui-icons/AttachFile';
import Delete from 'material-ui-icons/Delete';

class ComposeMail extends React.Component {
    constructor() {
        super();
        this.state = {
            to: '',
            cc: '',
            bcc: '',
            subject: '',
            message: '',
        }
    }

    render() {
        const {onMailSend, onClose, user} = this.props;
        const {to, cc, bcc, subject, message} = this.state;
        return (
            <Modal className="modal-box modal-box-mail" toggle={onClose} isOpen={this.props.open}
                   style={{zIndex: 2600}}>
                <ModalHeader className="modal-box-header bg-primary">
                    New Message
                    <IconButton className="text-white"
                                onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>
                </ModalHeader>
                <div className="modal-box-content d-flex flex-column">
                    <TextField
                        disabled
                        id="required"
                        label="From"
                        defaultValue={user.email}
                        margin="normal"/>
                    <TextField
                        id="required"
                        label="To*"
                        onChange={(event) => this.setState({to: event.target.value})}
                        defaultValue={to}
                        margin="normal"/>
                    <TextField
                        required
                        id="required"
                        label="CC"
                        onChange={(event) => this.setState({cc: event.target.value})}
                        defaultValue={cc}
                        margin="normal"/>
                    <TextField
                        id="required"
                        label="Bcc"
                        onChange={(event) => this.setState({bcc: event.target.value})}
                        value={bcc}
                        margin="normal"/>
                    <TextField
                        id="required"
                        label="Subject"
                        onChange={(event) => this.setState({subject: event.target.value})}
                        value={subject}
                        margin="normal"
                    />
                    <TextField
                        id="required"
                        label="Message"
                        onChange={(event) => this.setState({message: event.target.value})}
                        value={message}
                        multiline
                        rowsMax="4"
                        margin="normal"/>
                </div>

                <div className="modal-box-footer d-flex flex-row">
                    <Button disabled={to === ''} variant="raised" color="primary" onClick={() => {
                        onClose();
                        onMailSend(
                            {
                                'id': '15453a06c08fb021776',
                                'from': {
                                    'name': user.name,
                                    'avatar': user.avatar,
                                    'email': user.email
                                },
                                'to': [
                                    {
                                        'name': to,
                                        'email': to
                                    }
                                ],
                                'subject': subject,
                                'message': message,
                                'time': Moment(new Date).format('DD MMM'),
                                'read': false,
                                'starred': false,
                                'important': false,
                                'hasAttachments': false,
                                'folder': 1,
                                'selected': false,
                                'labels': [],
                            })

                    }}>Send Mail</Button>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton onClick={() => {
                        onClose();
                    }}>
                        <Delete/>
                    </IconButton>
                </div>
            </Modal>
        );
    }
}

export default ComposeMail;
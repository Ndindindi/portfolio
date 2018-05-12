import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import labels from 'app/routes/mail/data/labels'

const MailListItem = ({mail, onMailSelect, onMailChecked}) => {
    return (
        <div className="module-list-item mail-cell" onClick={() => {
            onMailSelect(mail);
        }}>

            <Checkbox
                checked={mail.selected}
                onClick={(event) => {
                    event.stopPropagation();
                    onMailChecked(mail)
                }}
                value="SelectMail"
            />

            <div className="module-list-info">

                <div className="module-list-content">
                    <div className="mail-user-info">
                        {mail.from.avatar === '' ?
                            <div
                                className="bg-blue avatar rounded-circle size-40 text-white text-center"
                                style={{fontSize: 16}}> {mail.from.name.charAt(0).toUpperCase()}</div> :
                            <img className="rounded-circle avatar size-40" alt="Alice Freeman"
                                 src={mail.from.avatar}/>
                        }
                        <span className="sender-name">{mail.from.name}</span>
                        {mail.hasAttachments &&
                        <i className="zmdi zmdi-attachment"/>}

                        <div className="time">{mail.time}</div>

                    </div>

                    <div className="subject">
                        {mail.subject}
                    </div>

                    <div className="message">
                        <p> {mail.message}</p>
                        <div className="labels">
                            {labels.map((label, index) => {
                                return (mail.labels).includes(label.id) && <div key={index}
                                                                                className={`badge text-white bg-${label.color}`}>{label.title}</div>
                            })
                            }
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default MailListItem;
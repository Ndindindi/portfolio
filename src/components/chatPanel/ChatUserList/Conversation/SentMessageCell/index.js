import React from 'react';

const SentMessageCell = ({conversation}) => {
    return (
        <div className="d-flex flex-nowrap chat-item flex-row-reverse">

            <img className="rounded-circle avatar size-40" src="http://via.placeholder.com/256x256"
                 alt={conversation.name}/>

            <div className="bubble jambo-card">
                <div className="message">{conversation.message}</div>
                <div className="time text-muted text-right mt-2">{conversation.sentAt}</div>
            </div>

        </div>
    )
};

export default SentMessageCell;
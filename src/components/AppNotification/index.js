import React from 'react';

const AppNotification = () => {
    $('.messages-list').slimscroll({
        height: '280px'
    });
    return (
        <div className="messages-list">
            <div className="d-flex align-items-center h-100 justify-content-center">
                No notifications as of now!
            </div>
        </div>
    )
};

export default AppNotification;


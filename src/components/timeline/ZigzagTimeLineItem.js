import React from 'react';

const ZigzagTimeLineItem = ({styleName, timeLine}) => {

    const {time, title, image, description, description1, description2} = timeLine;
    return (
        <div className={`timeline-item ${styleName}`}>
            <div className="timeline-badge timeline-img">
                {styleName.includes("timeline-inverted") ?
                    <img className="size-60" src="http://via.placeholder.com/83x83" alt="Pentagon" title="Pentagon"/> :
                    <img className="size-60" src="http://via.placeholder.com/83x83" alt="Pentagon" title="Pentagon"/>}
            </div>

            <div className="timeline-panel ">
                <div className="timeline-panel-scroll">
                    <div className="timeline-panel-header">

                        <div className="timeline-header-img timeline-left">
                            <img className="size-60 rounded-circle" src={image} alt="Pentagon" title="Pentagon"/>
                        </div>
                        <div className="timeline-heading">
                            <h5>{time}</h5>
                            <h3 className="timeline-title">{title}</h3>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <p className="card-text">{description} </p>
                    </div>
                    <div className="timeline-body">
                        <p>{description1} </p>
                    </div>
                    <div className="timeline-body">
                        <p>{description2} </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ZigzagTimeLineItem;
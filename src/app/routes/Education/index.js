import React from 'react';
import timeLineData from '../EducationData';
import WithIconTimeLineItem from 'components/timeline/WithIconTimeLineItem';
import {Accessible, AccountCircle, AddShoppingCart, EventSeat, Tablet} from 'material-ui-icons';

const Experience = () => {
    return (
        <div className="timeline-section timeline-center clearfix animated slideInUpTiny animation-duration-3">
            <WithIconTimeLineItem timeLine={timeLineData[0]} color="pink">
                <EventSeat />
            </WithIconTimeLineItem>
            <WithIconTimeLineItem styleName="timeline-inverted" timeLine={timeLineData[1]} color="purple">
                <Tablet />
            </WithIconTimeLineItem>
            <WithIconTimeLineItem timeLine={timeLineData[2]} color="green">
                <Accessible />
            </WithIconTimeLineItem>
            <WithIconTimeLineItem styleName="timeline-inverted" timeLine={timeLineData[3]} color="red">
                <AccountCircle />
            </WithIconTimeLineItem>
        </div>
    )
};

export default Experience;


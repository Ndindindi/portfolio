import React from 'react';
import timeLineData from '../EducationData';
import WithIconTimeLineItem from 'components/timeline/WithIconTimeLineItem';
import {Accessible, AccountCircle, AddShoppingCart, EventSeat, Tablet} from 'material-ui-icons';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import bg1 from '../../../images/bg1.png';


const Education = () => {
    return (
        <LayoutContentWrapper style={{
            height: '100%',
            backgroundImage: `url(${bg1})`,
            backgroundColor: '#000000DD',
            padding: '0px'
        }}>
            <div style={{
                display: 'table-cell',
                verticalAlign: 'middle',
                textAlign: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: '#000000DD'
            }}>
                <div style={{
                    position:'relative',
                    top:'50%',
                    transform: 'translateY(-50%)',
                    margin: 'auto',
                    width: '80%',
                    border: '0px solid #ffffff',
                    borderRadius: '5px',
                    padding: '10px',
                    textAlign: 'center',
                    backgroundColor: '#00000044',
                }}>

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
                </div>
            </div>
        </LayoutContentWrapper>
    )
};

export default Education;


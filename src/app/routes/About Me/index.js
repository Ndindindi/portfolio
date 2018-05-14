import React from 'react';
import ContactCard from 'components/Cards/Contact/index';
import {Card, CardBody, CardSubtitle, CardText} from 'reactstrap';
import {Col, Collapse, Input, Row} from 'antd';
import Button from 'antd';
import basicStyle from '../../../components/Config/basicStyle';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import LayoutContent from '../../../components/utility/layoutContent';
import pic from '../../../images/pic.jpg';
import Img from 'react-image';


const About = ({headerText, cardStyle}) => {
    const {colStyle, rowStyle} = basicStyle;
    const gutter = 16;

    return (
        <LayoutContentWrapper style={{border:'solid 2px black'}}>
                <Row style={rowStyle} gutter={gutter} justify="start" align="center">
                    <div style={{border:'solid 2px black'}}>
                        <Card className={`shadow border-2 ${cardStyle}`}>
                            <CardBody>
                                <CardText className="align-content-center">
                                    <b>Profile Intro</b>
                                </CardText>
                                <CardText>
                                    Software Engineer, Linux enthusiast and a Technology lover. I have gained experience through different team and personal projects, I have an ambition of working and sharing my skills with an Organization that allows me to explore my talents and professionalism.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div style={{border:'solid 2px black'}}>
                        <Card className={`shadow border-2 ${cardStyle}`}>
                            <CardBody>
                                <CardText className="align-content-center">
                                    <b>Ndimbumi Mwaitenda</b>
                                </CardText>
                                <CardText>
                                    Software Engineer, Linux enthusiast and a Technology lover.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {/*<ContactCard/>*/}

                </Row>
        </LayoutContentWrapper>
    );

}

export default About;
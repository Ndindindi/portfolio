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
        <LayoutContentWrapper style={{minHeight: '100vh'}}>
            <LayoutContent>
                <Row style={rowStyle} gutter={gutter} justify="start" align="center">
                    <Col md={8} sm={12} xs={24} style={colStyle}>
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
                    </Col>
                    <ContactCard/>

                </Row>
            </LayoutContent>
        </LayoutContentWrapper>
    );

}

export default About;
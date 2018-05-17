import React from 'react';
import ContactCard from 'components/Cards/Contact/index';
import {Card, CardBody, CardSubtitle, CardText} from 'reactstrap';
import {Col, Collapse, Input, Row} from 'antd';
import Button from 'antd';
import basicStyle from '../../../components/Config/basicStyle';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import pic from '../../../images/pic.jpg';
import Img from 'react-image';
import ContainerHeader from 'components/ContainerHeader';


const About = ({headerText, cardStyle}) => {
    const {colStyle, rowStyle} = basicStyle;
    const gutter = 16;

    return (
        <LayoutContentWrapper style={{
            height: '100%',
            padding: '10px'
        }}>
            <div align="center">
                <h2>
                    <b>About me</b>
                </h2>
                <Img src={pic} width={256} height={256} style={{borderRadius: '50%'}}/>
                <h4>
                    <b>Ndimbumi Mwaitenda</b>
                </h4>
                <p>
                    <b>Software Engineer and Penetration Tester</b>
                </p>
                <p>
                    Experienced Software Engineer who develop different projects with different programming language.
                    Skilled in React, React Native, Joomla, WordPress,Java,JavaScript,CSS,HTML5 and Android
                </p>
                <p>
                    Professional Penetration Tester
                </p>
            </div>
        </LayoutContentWrapper>
    );

}

export default About;
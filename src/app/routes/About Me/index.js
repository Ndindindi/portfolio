import React from 'react';
import basicStyle from '../../../components/Config/basicStyle';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import bg1 from '../../../images/bg1.png';
import pic from '../../../images/pic.jpg';
import Img from 'react-image';

const Profile = ({headerText, cardStyle}) => {
    const {colStyle, rowStyle} = basicStyle;
    const gutter = 16;

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
                    position: 'relative',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontWeight: 'bold',
                    fontSize: '50px',
                    margin: 'auto',
                    width: '85%',
                    height: '60%',
                    border: '5px dotted #ffffff',
                    borderRadius: '5px',
                    padding: '10px',
                    textAlign: 'center',
                    backgroundColor: '#00000044',
                    color: '#ffffff',
                    fontFamily: 'Open Sans',
                }}>
                    <div>
                        <div
                            style={{
                                border: 'solid 0px white'
                            }}
                        >
                            <p style={{
                                fontWeight: 'normal',
                                fontSize: '25px',
                            }}>A Small Introduction about Myself</p>
                        </div>
                        <br/>
                        <div
                            style={{
                                border: 'solid 0px white',
                                width: '80%',
                                display: 'inline-block'
                            }}>
                            <p style={{
                                fontWeight: 'normal',
                                fontSize: '23px',
                                textAlign: 'left'
                            }}>Ndimbumi Mwaitenda.
                                <br/>
                                A Software Engineer, Penetration Tester.
                            </p>
                            <p/>
                            <p style={{
                                fontWeight: 'normal',
                                fontSize: '19px',
                                textAlign: 'left'
                            }}>
                                I’m a Full-stack Engineer from Dar es salaam, Tanzania, Passionate about bringing
                                the best experience to my end users. I focus on mobile and web development,
                                penetration testing and security consultation ( crucial and most undermined
                                component in software development).
                            </p>
                            <p
                                style={{
                                    fontWeight: 'normal',
                                    fontSize: '19px',
                                    textAlign: 'left'
                                }}
                            >
                                I love to play around with scripts, travel and watching movies.
                            </p>
                            <p
                                style={{
                                    fontWeight: 'normal',
                                    fontSize: '19px',
                                    textAlign: 'left'
                                }}
                            >
                                My favourite stack : Linux, Metasploit, Wireshark, Micro-services, Docker, ReactJS,
                                ReactNative , Joomla, with continuous integration on Gitlab.
                            </p>
                        </div>
                        <div
                            style={{
                                border: 'solid 0px white',
                                width: '20%',
                                display: 'inline-block',
                                verticalAlign: 'top'
                            }}
                        >
                            <Img src={pic} width={256} height={256} style={{borderRadius: '50%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutContentWrapper>
    );

}

export default Profile;


// import React from 'react';
// import ContactCard from 'components/Cards/Contact/index';
// import {Card, CardBody, CardSubtitle, CardText} from 'reactstrap';
// import {Col, Collapse, Input, Row} from 'antd';
// import Button from 'antd';
// import basicStyle from '../../../components/Config/basicStyle';
// import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
// import pic from '../../../images/pic.jpg';
// import Img from 'react-image';
// import ContainerHeader from 'components/ContainerHeader';
//
//
// const About = ({headerText, cardStyle}) => {
//     const {colStyle, rowStyle} = basicStyle;
//     const gutter = 16;
//
//     return (
//         <LayoutContentWrapper style={{
//             height: '100%',
//             padding: '10px'
//         }}>
//             <div align="center">
//                 <h2>
//                     <b>About me</b>
//                 </h2>
//                 <Img src={pic} width={256} height={256} style={{borderRadius: '50%'}}/>
//                 <h4>
//                     <b>Ndimbumi Mwaitenda</b>
//                 </h4>
//                 <p>
//                     <b>Software Engineer and Penetration Tester</b>
//                 </p>
//                 <p>
//                     Experienced Software Engineer who develop different projects with different programming language.
//                     Skilled in React, React Native, Joomla, WordPress,Java,JavaScript,CSS,HTML5 and Android
//                 </p>
//                 <p>
//                     Professional Penetration Tester
//                 </p>
//             </div>
//         </LayoutContentWrapper>
//     );
//
// }
//
// export default About;
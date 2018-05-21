import React from 'react';
import Team from 'app/routes/Team';
import Button from 'material-ui/Button';
import ChatPanel from 'app/routes/ChatPanel/basic';
import {Link, withRouter} from 'react-router-dom';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import bg1 from '../../../images/bg1.png';



class Referees extends React.Component {

    render() {
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
                        paddingLeft:'60px',
                        textAlign: 'center',
                        backgroundColor: '#00000044',
                    }}>
                            <div className="row">
                                <div className="column">
                                    <Team team={{
                                        name: 'MR. VICTOR NYANGA',
                                        destination: 'C.E.O,Victronix Co. Ltd',
                                        address: 'P.o Box 34187, Dar es salaam',
                                        email:'info@victronix.co.tz',
                                        phone:'+255 767 241905',
                                        description: ' Custom Hardware Company Tanzania ',
                                        image: 'http://via.placeholder.com/256x256'
                                    }}/>
                                </div>
                                <div className="column">
                                    <Team team={{
                                        name: 'MR. JUMA RUGINA MDIMU',
                                        destination: 'Head of Computer Science Department',
                                        address: 'P.o Box 774, Iringa',
                                        email:'jumamdimu@gmail.com',
                                        phone:'+255 713 069555',
                                        description: ' Ruaha Catholic University',
                                        image: 'http://via.placeholder.com/256x256'
                                    }}/>
                                </div>
                                <div className="column">
                                    <Team team={{
                                        name: 'MR.GEORGE LUCIUS FUIME',
                                        destination: 'Chairperson,',
                                        address: 'P.o Box 345, Iringa',
                                        email:'gfuime1@gmail.com',
                                        phone:'+255 767 030406',
                                        description: ' Tanzania Alliance for Quality Education ',
                                        image: 'http://via.placeholder.com/256x256'

                                    }}/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Link to="/chat">
                                    <Button size="small" color="primary" >Confirm reference</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </LayoutContentWrapper>


        );
    }
}

export default Referees;
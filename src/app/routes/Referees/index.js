import React from 'react';
import Team from 'app/routes/Team';
import Button from 'material-ui/Button';
import ChatPanel from 'app/routes/ChatPanel/basic';
import {Link, withRouter} from 'react-router-dom';



class Referees extends React.Component {

    render() {
        return (
            <div>
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


        );
    }
}

export default Referees;
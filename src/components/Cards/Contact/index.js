import React from 'react';
import Button from 'material-ui/Button';

const ContactCard = () => {
    return (
        <div className="jr-card p-0">
            <div className="card-body">
                <ul className="contact-list list-unstyled">
                    <li className="media">
                        <i className="zmdi zmdi-phone zmdi-hc-fw zmdi-hc-lg text-primary align-self-center"/>
                        <span className="media-body">
                            +255 755 173 172
                        </span>
                    </li>
                    <li className="media">
                        <i className="zmdi zmdi-email zmdi-hc-fw zmdi-hc-lg text-primary align-self-center"/>
                        <span className="media-body">
                            mwaitendandimbumi@gmail.com
                        </span>
                    </li>
                    <li className="media">
                        <i className="zmdi zmdi-facebook-box zmdi-hc-fw zmdi-hc-lg text-primary align-self-center"/>
                        <span className="media-body">
                            Ndimbumi Mwaitenda
                        </span>
                    </li>
                    <li className="media">
                        <i className="zmdi zmdi-twitter-box zmdi-hc-fw zmdi-hc-lg text-primary align-self-center"/>
                        <span className="media-body">
                            ndi_ndi_ndi
                        </span>
                    </li>
                    <li className="media">
                        <i className="zmdi zmdi-pin zmdi-hc-fw zmdi-hc-lg text-primary align-self-center"/>
                        <span className="media-body">
                            2906, Bagamoyo road, Tangibovu Street,
                            <br/>
                            Mbezi beach,DAR.
                        </span>
                    </li>
                </ul>

                <Button size="small" color="primary">Get directions</Button>
            </div>
        </div>
    );
};

export default ContactCard;

import React from 'react';


const Team = ({team}) => {
    const {name, destination, address, email, phone, description, image} = team;

    return (
        <div className="m-1">
            <div className="jr-card px-0 pt-sm-5 text-center">
                <img className="size-100 avatar-shadow rounded-circle mx-auto mb-2" src={image} alt="Referee" />
                <div className="card-body bg-transparent">
                    <h3 className="card-title">{name}</h3>
                    <span className="post-designation">{destination}</span>
                    <p className="card-address">{address}</p>
                    <p className="card-email">{email}</p>
                    <p className="card-phone">{phone}</p>
                    <p className="card-text">{description}</p>


                </div>
            </div>
        </div>
    );
};


export default Team;
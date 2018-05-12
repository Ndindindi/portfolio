import React, {Component} from 'react';
import ApplicationTableCell from './ApplicationTableCell';

let counter = 0;

function createData(name, description, image, time, price) {
    counter += 1;
    return {id: counter, name, description, image, time, price};
}

class AssignmentTable extends Component {
    state = {
        data: [
            createData("Saans Application", "Renewal", 'http://via.placeholder.com/256x256', "6:06", '$54.20'),
            createData("Chatbull Application", "Support", 'http://via.placeholder.com/256x256', "9:20", '$25.12'),
            createData("Teri App", "It was popularised in the 1960s with the", 'http://via.placeholder.com/256x256', "4:30", '$15.99'),
            createData("Mili Products", "Marketing", 'http://via.placeholder.com/256x256', "9:20", '$21.25'),
            createData("G-axon Products", "Service", 'http://via.placeholder.com/256x256', "4:30", '$2.99'),
            createData("Wallet Application", "Renewal, a Latin professor", 'http://via.placeholder.com/256x256', "7:50", '$3.10'),
            createData("Chatbull Application", "Support", 'http://via.placeholder.com/256x256', "9:20", '$25.12'),
        ],
    };

    render() {
        const {data} = this.state;
        return (

            <table className="default-table table table-sm table-hover">
                <thead>
                <tr>
                    <th>Application</th>
                    <th>Time</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {data.map(data => {
                    return (
                        <ApplicationTableCell key={data.id} data={data}/>
                    );
                })}
                </tbody>
            </table>
        );
    }
}

export default AssignmentTable;
import React from 'react';
import './Candid2.css'

const Candid2 = () => {
    return (
        <div>
            <table style={{border:"1px solid grey"}}>
                <tr className="row border">
                    <td className="col span_2">CANDIDATE NO</td>
                    <td className="col span_2">CANDIDATE NAME</td>
                    <td className="col span_2">Email</td>
                    <td className="col span_2">Phone No</td>
                    <td className="col span_2">Linkedin</td>
                </tr>
            </table>
        </div>
    );
};

export default Candid2;
import React from 'react';
import "./clients.css"
function Client() {
    return (
        <div className="client-container">
            <h1>Prominent Clients of Delta Tech</h1>
            <h2>Our partnership with industry leaders across manufacturing and industrial sectors</h2>
            <div className="client-names-container">
                <div className="client-names">
                    <ul>
                        <li>GE Medical Ltd</li>
                        <li>AMC Manufacturing Systems</li>
                        <li>BFW Ltd</li>
                        <li>Raichur Thermal Power Station</li>

                    </ul>
                </div>
                <div className="client-names">
                    <ul>
                        <li>Dr.Reddy Laboratories Ltd</li>
                        <li>JSW Ltd</li>
                        <li>BHEL</li>
                        <li>Jindal Aluminium Ltd</li>

                    </ul>
                </div>
            </div>



        </div>
    );
}
export default Client;

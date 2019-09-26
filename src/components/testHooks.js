import React, { useState } from 'react';
import { Row }from 'reactstrap';

function Greeting(props) {
    const [name, setName] = useState('Mohannad');
    const [surname, setSurname] = useState('Adham');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    
    function handleSurnameChange(e) {
        setSurname(e.target.value);
    }

    return (
        <section>
            <Row label="Name">
                <input
                value={name}
                onChange={handleNameChange}
                />
            </Row>
            <Row label="Surname">
                <input
                value={surname}
                onChange={handleSurnameChange}
                />
            </Row>

        </section>
    );
}

export default Greeting;
import React from 'react';
import './Props.css';

const Props = () => {
    return (
        <div className='props'>
            <h2>Props Vs State</h2>
            <p>In props the Data is passed from one component to another, otherside state passed data within the component only. Props cannot be modified that is call immutable , but state can be modified that called mutable. Also props can be used with state and functional components, Otherhand state can be used only with the state components/class component. Props are read-only and 	State is both read and write.</p>
        </div>
    );
};

export default Props;
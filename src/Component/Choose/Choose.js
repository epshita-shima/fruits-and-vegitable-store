import React from 'react';

const Choose = (props) => {
    const { name } = props.item;
    return (
        <div>
            <h3>Chosen Product: {name}</h3>
        </div>
    );
};

export default Choose;
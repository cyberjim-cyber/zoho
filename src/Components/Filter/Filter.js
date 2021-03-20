import React from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Filter = () => {
    return (
        <div>
            <h4>All candidates  <FontAwesomeIcon icon={faChevronDown}/></h4>
           
        </div>
    );
};

export default Filter;
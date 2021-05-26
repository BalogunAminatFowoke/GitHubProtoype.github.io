import React from 'react';
import './Activity-container.css';

const ActivityContainer  = ({type, url}) => {
    return(
        <>
                <p>{type}  <span style={{color: 'green'}}>
                    <b>
                            {url}
                    </b>
                    </span></p>
                <hr/>
        </>
    )
}

export default ActivityContainer;
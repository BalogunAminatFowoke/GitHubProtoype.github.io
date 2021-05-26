import React from  'react';
import ActivityContainer from './Activity-Container/Activity-container';

const  ActivityList =  ({activity}) => {
    return(
        <>
            { 
                activity && activity.map ((star, i) => 
                <ActivityContainer 
                    key={i}
                    type={star.type}
                    url={star.actor.url}
                />
                )
            }
            
        </>
    )
}

export default  ActivityList;
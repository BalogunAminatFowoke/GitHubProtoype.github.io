import React from 'react';
import './repoinformation-container.css';
import { FaCircle, FaCodeBranch, FaStar } from 'react-icons/fa';

const RepoInfoContainer = ({description, star, fork, name, language, issues, size, branch}) => {
    return(
        <>
        <br/>
        <div   className="repoinfocontainer">
            <h4><b>{name}</b></h4>
            <p>
                {description}
            </p>
            
        <p> 
            <span style={{marginRight:"15px"}}> <FaStar /> {fork}</span>
            <span style={{marginRight:"15px"}}> <FaCircle /> {language}</span>
            <span style={{marginRight:"15px"}}> {issues}</span>
            <span style={{marginRight:"15px"}}> {size}KB</span>
            <span style={{marginRight:"15px"}}> <FaCodeBranch /> {branch}</span>
        </p>
        
        </div>
        </>
    )
}

export default RepoInfoContainer;
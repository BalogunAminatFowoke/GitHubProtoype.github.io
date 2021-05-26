import React from 'react';
import RepoInfoContainer from './../Components/RepoInformation-Container/repoinformation-container';
//import {Repos} from './../repo-details.jsx'

const RepoList = ({repo}) => {
    return (
            <div>
            {
                repo && repo.map((item, idx) => (
                    <RepoInfoContainer
                    key={idx}
                    description= {item.description}
                    name={item.name}
                    star={item.star}
                    fork={item.forks}
                    language={item.language}
                    issues={item.open_issues}
                    size={item.size}
                    branch={item.default_branch}
                    />
                ))
            }
            </div>
    )
    
}

export default RepoList;
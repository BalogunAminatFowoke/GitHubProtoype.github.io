import React from 'react';
import './homepage.css';
import Searchbox from '../searchbox/Searchbox';
///import RepoInfoContainer from './../RepoInformation-Container/repoinformation-container';
import RepoList from './../Repo-List';
import VisitRepo from '../../Button/Button';
import { FaTwitter } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import ActivityList from '../Activity-List';



const HomePage = ({account, repo, activity, searchChange}) => {
    return (
        <>
        <div className="container">
{/**********************************Profile Container***************************************** */}
            <div className="profile-container">
                <img src={account.avatar_url}  alt="githublogo" className="image"  style={{float:  'center'}}/>

                <p style={{fontSize: '30px' }} >
                    <b>
                        {account.name}
                    </b>
<br/>
                    <span style={{display: 'inline-block',  fontSize: '19px', color: 'blue'}}>
                        <b>
                            {account.login}
                        </b>
                    </span>
                </p>
                <p>{account.bio}</p>

                <p style={{fontSize: '25px'}}>
                    <b>
                        {account.location} 
                    </b>
                </p>

                <p>
                    Joined {account.created_at}
                </p>
                
<hr/><br/>
                <ul className="ul-list">
                    <li style={{marginRight: '18px', fontSize: '18px'}}>
                        <b>
                            {account.following}
                        </b>
                        <span style={{display: 'block'}}>Following</span>
                    </li>
                    
                    <li style={{marginRight: '18px', fontSize: '18px'}}>
                        <b>
                            {account.followers}
                        </b>
                        <span style={{display: 'block'}}>Followers</span>
                    </li>

                    <li style={{marginRight: '18px', fontSize: '18px'}}>
                        <b>
                            {account.public_repos}
                        </b>
                        <span style={{display: 'block'}}>Repos</span>
                    </li>
                
                </ul>
<br/><hr/>
                <p> <FaBuilding />  {account.company}</p>
                <p> <FaLocationArrow />{account.location}</p>
                <p> <FaTwitter /> {account.twitter_username}</p>
            </div>
            
{/**********************************Repo Container***************************************** */}
            <div  className="repo-container">
                
                <Searchbox searchChange={searchChange}/>
                <br/>
                
                <RepoList repo={repo} />
                
            </div>



{/**********************************Activity Container***************************************** */}
            <div className="activity-container">
                <p><h2>Activity</h2></p>
                <p>
                    <ActivityList  activity={activity}/>
                </p>
        <VisitRepo/>
            </div>
            
        </div>
    </>
    )
}

export default HomePage;
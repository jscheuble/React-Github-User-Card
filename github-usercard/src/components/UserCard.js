import React from 'react';

export default function UserCard(props) {
    return(
        <div className='card'>
            <img src={props.user.avatar_url} alt='github user'/>
            <div>
                <h3>{props.user.name}</h3>
                <p>{props.user.login}</p>
                <p>Profile: <a href={props.user.html_url}>{props.user.html_url}</a></p>
                <p>Followers: {props.user.followers}</p>
                <p>Following: {props.user.following}</p>
                <p>Public Repos: {props.user.public_repos}</p>
                <p>Location: {props.user.location}</p>
                <p>Bio: {props.user.bio}</p>
            </div>
        </div>
    );
}

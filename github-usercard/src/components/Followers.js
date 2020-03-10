import React from 'react';

export default function Followers(props) {

    return(
        <div>
            {props.followers.map((e, i) => {
                return (
                    <div className='card'>
                        <img src={e.avatar_url} alt='github user'/>
                        <div>
                            <h3>{e.name}</h3>
                            <p>{e.login}</p>
                            <p>Profile: <a href={e.html_url}>{e.html_url}</a></p>
                            <p>Followers: {e.followers}</p>
                            <p>Following: {e.following}</p>
                            <p>Public Repos: {e.public_repos}</p>
                            <p>Location: {e.location}</p>
                            <p>Bio: {e.bio}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
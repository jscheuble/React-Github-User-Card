import React from 'react';

import UserCard from './UserCard';

export default function Followers(props) {

    return(
        <div>
            {props.followers.map((e) => {
                return (
                    <UserCard user={e}/>
                );
            })}
        </div>
    );
}
import React from 'react';

export default function Form(props) {
    return(
        <form>
            <input value={props.name} onChange={props.handleChange}/>
            <button onClick={props.fetchUser}>Search</button>
        </form>
    );
}
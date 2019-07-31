import React, { useState } from 'react';

export default function SmurfForm(props) {
    const [formState, setFormState] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChange = e => {
        setFormState({
            ...formState, 
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(e, formState)
        console.log(formState)
        setFormState({name: '',
        age: '',
        height: ''})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                name="name"
                value={formState.name}
                type="text"
                placeholder="Enter name!"
                onChange={handleChange}
                />
                <input
                name="age"
                value={formState.age}
                type="text"
                placeholder="Enter age!"
                onChange={handleChange}
                />
                <input
                name="height"
                value={formState.height}
                type="text"
                placeholder="Enter height!"
                onChange={handleChange}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

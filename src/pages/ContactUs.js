import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

export default function ContactUs(){
    
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        'fullname': '',
        'email':''
    })

    function submitForm(){
        navigate('/form-submitted', {
            'state':{
                'formData':formState
            }
        })
    }

    const updateFormField = (event) => {
        setFormState(
            {...formState,
            [event.target.name]: event.target.value
            }
        )
    }
    
    return(
        <React.Fragment>
            <h1> Contact Us </h1>
            <div className="container-fluid">
                <label> Full Name: </label>
                <input  type="text"
                        name="fullname"
                        value={formState.fullname}
                        onChange={updateFormField}
                />
            </div>
            <div className="container-fluid">
                <label> Email Address: </label>
                <input  type="text"
                        name="email"
                        value={formState.email}
                        onChange={updateFormField}
                />
            </div>
            <button className="btn btn-primary"
                    onClick={submitForm} 
            > Submit </button>
        </React.Fragment>
    )
}


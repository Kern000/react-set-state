import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactUs(){
    
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        'fullname': '',
        'email':''
    })

    const submitForm = useCallback(() => {
        
        navigate('/form-submitted', {
            'state':{
                'formData':formState
            }
        })
    }, [navigate, formState])

    const updateFormField = useCallback((event) => {
        setFormState(
            {...formState,
            [event.target.name]: event.target.value
            }
        )
    }, [formState])
    
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


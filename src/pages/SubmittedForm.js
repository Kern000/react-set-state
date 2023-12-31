import React from 'react';
import {useLocation} from 'react-router-dom';

export default function SubmittedForm(){

    const location=useLocation();
    let fullname=location.state.formData.fullname;
    let email=location.state.formData.email;

    return(
        <React.Fragment>
            <h1> Thank you for contacting us </h1>
            <p> Your name: {fullname} </p>
            <p> Your email: {email} </p>
        </React.Fragment>
    )
}


//uselocation hook retrieve details passed by useNavigate from other page, which included route and the information to pass over, such as the {state: {formdata: formState}}

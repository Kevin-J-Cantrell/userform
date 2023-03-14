import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false
    const [firstError, setFirstError] = useState("");  // setting state for each error message
    const [lastError, setLastError] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [PasswordErr, setPasswordErr] = useState("");
    const [ConfirmErr, setConfirmErr] = useState("");

    const FirstNameErrMsg = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstError("Name is required!");
        } else if (e.target.value.length < 4) {
            setFirstError("Must be 4 characters or more!");
        } else {
            setFirstError("");
        }
    }

    const LastNameErrMsg = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastError("Name is required!");
        } else if (e.target.value.length < 3) {
            setLastError("Must be 3 characters or more!");
        } else {
            setLastError("");

        }
    }

    const EmailErrMsg = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailErr("Name is required!");
        } else if (e.target.value.length < 3) {
            setEmailErr("Must be 3 characters or more!");
        } else {
            setEmailErr("");

        }
    }

    const PasswordErrMsg = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordErr("Name is required!");
        } else if (e.target.value.length < 4) {
            setPasswordErr("Must be 4 characters or more!");

        } else {
            // an empty string is considered a "falsy" value
            setPasswordErr("");

        }
    }
    const ConfirmPasswordErrMsg = (e) => {// checking if passwords match
        setConfirm(e.target.value);
        if (e.target.value.length === 0) {
            setConfirmErr("Please confirm your password.");
        } else if (e.target.value !== password) {
            setConfirmErr("Passwords do not match.");
        } else {
            setConfirmErr("Passwords match.");
        }
    }


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirm,hasBeenSubmitted};
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");
        setHasBeenSubmitted(true);
    };

    return (
        <form className='bg-primary d-flex flex-column  ' onSubmit={createUser}>
            <h1>Your Form</h1>
            {/* <input type="hidden" onChange={ handleError } /> */}
            {
                firstError ?
                    <p>{firstError}</p> : ''
            }

            <div className='bg-secondary mb-1 col-4 align-self-center form-control-sm mt'>
                <label className="mr-3">First Name: </label>
                {
                    <input className='form-control-sm mr-4' type="text" value={firstName} onChange={FirstNameErrMsg} />
                }
            </div>
            {
                lastError ?
                    <p>{lastError}</p> : ''
            }
            <div className='bg-secondary mb-1 col-4 align-self-center form-control-sm'>
                <label className="mr-3">Last Name: </label>
                <input className='form-control-sm mr-4' type="text" value={lastName} onChange={LastNameErrMsg} />
            </div>
            {
                emailErr ?
                    <p>{emailErr}</p> : ''
            }
            <div className='bg-secondary mb-1 col-4 align-self-center form-control-sm'>
                <label className="mr-3">Email Address:</label>
                <input className='form-control-sm mr-5 form-label' type="email" value={email} onChange={EmailErrMsg} />
            </div>
            {
                PasswordErr ?
                    <p>{PasswordErr}</p> : ''
            }
            <div className='bg-secondary mb-1 col-4 align-self-center form-control-sm'>
                <label className="mr-3 ">Password: </label>
                <input className='form-control-sm mr-3 ' type="password" value={password} onChange={PasswordErrMsg} />
            </div>
            {
                ConfirmErr ?
                    <p>{ConfirmErr}</p> : ''
            }
            <div className='bg-secondary mb-1 col-4 align-self-center form-control-sm'>
                <label className="mr-3">Confirm: </label>
                <input className='form-control-sm mr-2' type="password" value={confirm} onChange={ConfirmPasswordErrMsg} />
            </div>
            <div>
                <input className='btn btn-info col-1 p-1 m-1 mr-3' type="submit" value="Create User" />
            </div>
            <div className="d-flex flex-column ">
                <h3>Your Form Data</h3>
                <div className='col-11'>
                    <p className='mr-5'>First Name:<span className='ml-2'>{firstName}</span></p>
                </div>
                <div className='col-11'>
                    <p className='mr-5'>Last Name:<span className='ml-2'>{lastName}</span></p>
                </div>
                <div className='col-11'>
                    <p>Email:<span className='ml-2'>{email}</span></p>
                </div>
                <div className='col-11'>
                    <p className='mr-4'>Password:<span className='ml-2'>{password}</span></p>
                </div>
                <div className='col-10 '>
                    <p>Confirmed Password:<span className='ml-2'>{confirm}</span></p>
                </div>
            </div>

        </form>
    );
};

export default Form;

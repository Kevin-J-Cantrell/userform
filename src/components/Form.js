import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirm, setConfirm] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName,lastName, email, password ,confirm};
        console.log("Welcome", newUser);
    	setFirstName("");
    	setLastName("");
    	setEmail("");
    	setPassword("");
    	setConfirm("");
    };
    
    return(
        <form className='bg-primary d-flex flex-column  ' onSubmit={ createUser }>
            <h1>Your Form</h1>
            <div className='bg-secondary mb-1 col-4 align-self-center form-control-sm mt'>
                <label className="mr-3">First Name: </label> 
                <input className='form-control-sm mr-4' type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div className='bg-secondary mb-1 col-4 align-self-center form-control-sm'>
                <label className="mr-3">Last Name: </label> 
                <input className='form-control-sm mr-4' type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div className='bg-secondary mb-1 col-4 align-self-center form-control-sm'>
                <label className="mr-3">Email Address:</label> 
                <input className='form-control-sm mr-5 form-label' type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className='bg-secondary mb-1 col-4 align-self-center form-control-sm'>
                <label className="mr-3 ">Password: </label>
                <input className='form-control-sm mr-3 ' type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div className='bg-secondary mb-1 col-4 align-self-center form-control-sm'>
                <label className="mr-3">Confirm: </label>
                <input className='form-control-sm mr-2' type="password" value={confirm} onChange={ (e) => setConfirm(e.target.value) } />
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
            <div className='col-10'>
                <p>Confirmed Password:<span className='ml-2'>{confirm}</span></p>
            </div>
            </div>
            
        </form>
    );
};
    
export default Form;

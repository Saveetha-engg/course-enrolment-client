import React, { useState } from 'react'

const EnrollmentComponent = () => {
    const [inputs, setInputs] = useState({})

    const inputHandler = (event) => {
        const name = event.target.name
        const value = event.target.value

        if (name.includes('.')) {
            const [firstKey, secondKey] = name.split('.');
            setInputs((values) => ({
                ...values,
                [firstKey]: {
                    ...values[firstKey],
                    [secondKey]: value,
                },
            }));
        } else {
            setInputs((values) => ({
                ...values,
                [name]: value,
            }));
        }
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        console.log(inputs)
    }

  return (
    <form onSubmit={formSubmitHandler} >
        <h1>Course Enrollment</h1>

        <div className='mb-3'>
            <label>Student Name</label>
            <input 
                type='text'
                className='form-control'
                placeholder='Enter your name'
                name='student.name'
                value={inputs.name}
                onChange={inputHandler}
                required
            />
        </div>

        <div className='mb-3'>
            <label>Register Number</label>
            <input
                type='text'
                className='form-control'
                placeholder='Enter your register number'
                name='student.registerNumber'
                value={inputs.registerNumber}
                onChange={inputHandler}
                required
            />
        </div>

        <div className='mb-3'>
            <label>Password</label>
            <input
                type='password'
                className='form-control'
                placeholder='Enter your password'
                name='student.password'
                value={inputs.password}
                onChange={inputHandler}
                required
            />
        </div>

        <div className='mb-3'>
            <label>Select your first subject (Language)</label>
            <select
                className='form-control'
                name='subjects.firstSubject'
                value={inputs.firstSubject}
                onChange={inputHandler}
                required>
                <option value="" disabled selected>(Select one)</option>
                <option value="tamil">Tamil</option>
                <option value="french">French</option>
                <option value="telugu">Telugu</option>
            </select>
        </div>

        <div className='mb-3'>
            <label>Select your first subject (Language)</label>
            <select
                className='form-control'
                name='subjects.secondSubject'
                value={inputs.secondSubject}
                onChange={inputHandler}
                required>
                <option value="" disabled selected>(Select one)</option>
                <option value="tamil">Tamil</option>
                <option value="french">French</option>
                <option value="telugu">Telugu</option>
            </select>
        </div>

        <div className='mb-3'>
            <label>Select your first subject (Language)</label>
            <select
                className='form-control'
                name='subjects.thirdSubject'
                value={inputs.thirdSubject}
                onChange={inputHandler}
                required>
                <option value="" disabled selected>(Select one)</option>
                <option value="tamil">Tamil</option>
                <option value="french">French</option>
                <option value="telugu">Telugu</option>
            </select>
        </div>

        <div className='d-grid'>
            <button type='submit' className='btn btn-primary' >Submit</button>
        </div>

        <p className='forgot-password text-right'>
            Already registered, <a href='/login'>Sign in here?</a>
        </p>

      </form>
  )
}

export default EnrollmentComponent
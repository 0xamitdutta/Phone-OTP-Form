import '../App.css'
import { useState } from 'react'
import OTPInput from './OTPInput'

const PhoneNumber = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showOTPfield, setShowOTPfield] = useState(false);

    const handleChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Adding Validations
        // 1. Phone number should only contain numbers
        const regex = /^[0-9]+$/;

        // 2. Phone number should be 10 digits long
        if (phoneNumber.length !== 10 || !regex.test(phoneNumber)) {
            alert('Please enter a valid 10 digit phone number');
            return;
        }
        // Make API call to send OTP
        setShowOTPfield(true);
    }
    return (
        <div>
            {!showOTPfield ?
                <form className='app-container'>
                    <h1>Enter your 10 digit mobile number</h1>
                    <input className='phone-input' type='text' placeholder='Enter your 10 digit mobile number' onChange={handleChange} />
                    <button className='phone-input-submit' onClick={handleSubmit}>Send OTP</button>
                </form> :
                <OTPInput length={4} />
            }
        </div>

    )
}

export default PhoneNumber
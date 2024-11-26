import React, { useState } from 'react';
import './App.css'; // Ensure you have the necessary styles
import ToggleButton from './ToggleButton';

const countriesAndCities = {
    USA: ['New York', 'Los Angeles', 'Chicago'],
    Canada: ['Toronto', 'Vancouver', 'Montreal'],
    UK: ['London', 'Manchester', 'Birmingham'],
    Australia: ['Sydney', 'Melbourne', 'Brisbane'],
};

const RegistrationForm = () => {
    const [isOn, setIsOn] = useState(false);  // Toggle state lifted to RegistrationForm
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState({});
    const [success, setSuccess] = useState(false);
    
    // Dropdown states
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    const handleToggle = () => {
        setIsOn((prevState) => !prevState);  // Toggle state update
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            case 'country':
                setSelectedCountry(value);
                setCities(countriesAndCities[value] || []);
                setSelectedCity(''); // Reset city selection
                break;
            case 'city':
                setSelectedCity(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = {};

        // Basic validation
        if (!name) {
            errors.name = 'Name is required';
        }
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }
        if (!password) {
            errors.password = 'Password is required';
        }
        if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        if (!selectedCountry) {
            errors.country = 'Country is required';
        }
        if (!selectedCity) {
            errors.city = 'City is required';
        }

        if (Object.keys(errors).length > 0) {
            setError(errors);
            setSuccess(false);
        } else {
            setError({});
            setSuccess(true);
            // Clear form fields after successful submission
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setSelectedCountry('');
            setCities([]);
            setSelectedCity('');
        }
    };

    return (
        <div className={`registration-form-container ${isOn ? 'bg-on' : 'bg-off'}`}>
            <ToggleButton isOn={isOn} handleToggle={handleToggle} />

            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            style={{ marginLeft: '10px', padding: '5px' }}
                        />
                    </label>
                    {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            style={{ marginLeft: '10px', padding: '5px' }}
                        />
                    </label>
                    {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
 placeholder="Your Password"
                            style={{ marginLeft: '10px', padding: '5px' }}
                        />
                    </label>
                    {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
                </div>
                <div>
                    <label>
                        Confirm Password:
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            style={{ marginLeft: '10px', padding: '5px' }}
                        />
                    </label>
                    {error.confirmPassword && <p style={{ color: 'red' }}>{error.confirmPassword}</p>}
                </div>
                <div>
                    <label>
                        Country:
                        <select name="country" value={selectedCountry} onChange={handleChange} style={{ marginLeft: '10px', padding: '5px' }}>
                            <option value="">Select a country</option>
                            {Object.keys(countriesAndCities).map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </label>
                    {error.country && <p style={{ color: 'red' }}>{error.country}</p>}
                </div>
                {selectedCountry && (
                    <div>
                        <label>
                            City:
                            <select name="city" value={selectedCity} onChange={handleChange} style={{ marginLeft: '10px', padding: '5px' }}>
                                <option value="">Select a city</option>
                                {cities.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </label>
                        {error.city && <p style={{ color: 'red' }}>{error.city}</p>}
                    </div>
                )}
                <button type="submit" style={{ marginTop: '10px' }}>Register</button>
            </form>
            {success && <h2 style={{ color: 'green' }}>Registration Successful!</h2>}
        </div>
    );
};

export default RegistrationForm;
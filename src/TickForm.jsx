import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Displayticket from "./Displayticket"


const TickForm = () => {
  // State hooks for form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [errors, setErrors] = useState({});
  const [ticket, setTicket] = useState(null);

const navigate = useNavigate()
const handlenavigate =()=>{
  navigate("./Displayticket")
}

  // Validation function for form fields
  const validateForm = () => {
    const newErrors = {};
    if (!fullName) newErrors.fullName = "Full name is required";
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!avatarUrl || !/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp))$/.test(avatarUrl)) {
      newErrors.avatarUrl = "Please provide a valid image URL";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setTicket({ fullName, email, avatar: avatarUrl });
      localStorage.setItem('formData', JSON.stringify({ fullName, email, avatarUrl }));
        
    }
  };


  // Persist form data on page reload (using localStorage)
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const { fullName, email, avatarUrl } = JSON.parse(savedData);
      setFullName(fullName);
      setEmail(email);
      setAvatarUrl(avatarUrl);
    }
  }, []);


  return (
    <div className="app">
      <h1>Conference Ticket Generator</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            placeholder='Plesae enter your full name'
            onChange={(e) => setFullName(e.target.value)}
          />
           {errors.fullName && <p className="error">{errors.fullName}</p>}
          
        </div>

        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder='Plesae enter your email address'
            onChange={(e) => setEmail(e.target.value)}
          />
           {errors.email && <p className="error">{errors.email}</p>}
        
        </div>

        <div>
          <label htmlFor="avatarUrl">Avatar URL:</label>
          <input
            type="text"
            id="avatarUrl"
            placeholder='Please enter a valid url'
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
         {errors.avatarUrl && <p className="error" style={{marginBottom:"10px"}}>{errors.avatarUrl}</p>}
        </div>

        <button type="submit"onClick={handlenavigate} >Submit </button>
      </form>

      {ticket && (
        
        <div className="ticket">
          <h2>Conference Ticket</h2>
          <img src={ticket.avatar} alt="Avatar" />
          <p>Name: {ticket.fullName}</p>
          <p>Email: {ticket.email}</p>
        </div>
      )}
    </div>
  );
};

export default TickForm;

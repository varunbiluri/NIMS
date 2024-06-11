    import React, { useState } from 'react';
    import './styles/EnquireButton.css';

    const EnquireButton = () => {
        const [isPopupOpen, setIsPopupOpen] = useState(false);
        const [formData, setFormData] = useState({
            name: '',
            contact: '',
            email: '',
            message: '',
        });

        const togglePopup = () => {
            setIsPopupOpen(!isPopupOpen);
        };

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission logic here
            console.log('Form submitted', formData);
            // Close the popup after submission
            togglePopup();
        };

        const isFormValid = formData.name && formData.contact && formData.email && formData.message;

        return (
            <>
                <a href="#enquire" className="enquire-button" onClick={togglePopup}>Enquire Now</a>
                {isPopupOpen && (
                    <div className="popup-overlay">
                        <div className="popup-content">
                            
                            <h2>Enquire Now</h2>
                            <form className="popup-form" onSubmit={handleSubmit}>
                                <button className="popup-close-button" onClick={togglePopup}>X</button>
                                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                                <input type="text" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required />
                                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                                <button type="submit" disabled={!isFormValid}>Submit</button>
                            </form>
                        </div>
                    </div>
                )}
            </>
        );
    };

    export default EnquireButton;

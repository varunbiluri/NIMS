import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import './App.css';
import EnquireButton from './components/EnquireButton';
import ImageGallery from './components/ImageGallery';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading effect for 3 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        // Cleanup function
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="content">
            {loading ? <Loading /> : <EnquireButton />    }
            <ImageGallery />
            {/* Render other components once loading is complete */}
            
        </div>
    );
};

export default App;

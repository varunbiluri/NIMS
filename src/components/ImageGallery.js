import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/ImageGallery.css'; // Your custom styles
import image1 from './assests/images/banner-07.png'; // Your images
import NavBar from './NavBar';

const ImageGallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false, // Disable arrows    
        prevArrow: null, // Remove the previous arrow
        nextArrow: null, // Remove the next arrow
        dots: true ,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <NavBar />
        <Slider {...settings}>
            <div>
                <img src={image1} alt="Image 1" />
            </div>
            <div>
                <img src={image1} alt="Image 2" />
            </div>
            <div>
                <img src={image1} alt="Image 3" />
            </div>
            {/* Add more images as needed */}
        </Slider>
        </div>
        
    );
};

export default ImageGallery;

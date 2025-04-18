import React from 'react';
import '../screens/styles/Loader.css';
import LoaderImage from '../screens/res/images/Profile.jpeg'; 

export default function Loader() {
  return (
    <div className="loader-overlay">
      <img src={LoaderImage} alt="Loading..." className="loader-image" />
    </div>
  );
}

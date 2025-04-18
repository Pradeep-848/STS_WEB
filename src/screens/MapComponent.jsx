import React from 'react';

const MapComponent = () => {
  return (
    <div style={{ borderRadius: '12px', overflow: 'hidden', width: '100%', height: '300px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.3801181835936!2d77.08485707484718!3d10.640450260835432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba849db3eaf4b1d%3A0xabc3c0b72f8d61ef!2sShanmuga%20Mahal!5e0!3m2!1sen!2sin!4v1688996029186!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;

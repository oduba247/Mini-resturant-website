import React from 'react';

const Iframe = ({ latitude, longitude, zoom}) => {


    const src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31710.520908626644!2d3.3296614156249924!3d6.545015500000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8de906a24317%3A0x94081ea331840687!2sSPEEDY%20DISH%20RESTAURANT%20%26%20LOUNGE!5e0!3m2!1sen!2sng!4v1677454954709!5m2!1sen!2sng `     
    return (
<div>
<iframe
    width="100%" height="450" style="border:0;" style={{ border: 0 }}
      src={src} allowfullscreen
      loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
    );
};

export default Iframe;



// width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
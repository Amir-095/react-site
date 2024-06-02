import React from 'react';
import '../css/Karta.css'
function Karta() {
  return(
    <div className='containers'>
        <iframe
          src="https://nfspolska.pl/maps/need-for-speed-unbound-lakeshore-city-map/#3/-12.49/-4.61"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allowFullScreen
          loading="lazy"
        ></iframe>
  </div>
);

}

export default Karta;

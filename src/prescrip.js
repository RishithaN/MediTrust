import React, { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';
import './prescrip.css'


function Prescrip() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [recognizedText, setRecognizedText] = useState('');
  const [isShown, setIsShown] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const mapProp = {
   center: {lat: 40.73, lng: -73.93}, 
   zoom: 12
}

  const handleRecognizeClick = () => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.addEventListener('load', function() {
        const imageDataUrl = reader.result;
        Tesseract.recognize(
          imageDataUrl,
          'eng',
        ).then(({ data: { text } }) => {
          setRecognizedText(text);
          setIsShown(true);
        });
      }, false);
      reader.readAsDataURL(selectedFile);
    }
  }

  return (
    <div className='wrapper'>
      <h1>Find your medicines</h1>
      <div className='piccon'>
        <p>Upload a picture of prescription</p>
        <div className='uploadbox'>
            <input type="file" onChange={handleFileChange} />
        </div>
        <button onClick={handleRecognizeClick}>Get Medicines</button>
      </div>
       {isShown && (
        <div className='medbox'>
        <h2>Medicines are</h2>
        <p>{recognizedText}</p>
      </div>
      )}
      
      {/* <button onClick={NearbyPharmacies}>Find</button> */}
    </div>
  );
}

export default Prescrip
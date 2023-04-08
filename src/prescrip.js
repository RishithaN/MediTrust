import React, { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';
import './prescrip.css'
import Map from './map';
function Prescrip() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [recognizedText, setRecognizedText] = useState('');
  const [isShown, setIsShown] = useState(false);
  const [isShowPharm, setIsShowPharm] = useState(false);

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

  const NearbyPharmacies = () => {
    setIsShowPharm(true);
  }



  return (
    
    <div className='wrapper' style={{marginTop:0}}>
      <h1>Find your medicines</h1>
      <div className='piccon'>
        <p>Upload a picture of prescription</p>
        <div className='uploadbox'>
            <input type="file" onChange={handleFileChange} />
        </div>
        <button onClick={handleRecognizeClick} className='button' style={{width:20+'rem'}}>Get Medicines</button>
      </div>
       {isShown && (
        <div className='medbox'>
        <h2 style={{marginTop:0}}>Medicines are</h2>
        <p>{recognizedText}</p>
      </div>
      )}
      
      <button onClick={NearbyPharmacies} className='button'>Find</button>
      {
        isShowPharm && (
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <table>
                    <tr>
                        <th>Pharmacy</th>
                        <th>Pincode</th>
                    </tr>
                    <tr>
                        <th>Pharmacy name</th>
                        <th>600078</th>
                    </tr>
                    <tr>
                        <th>Pharmacy name</th>
                        <th>600078</th>
                    </tr>
                    <tr>
                        <th>Pharmacy name</th>
                        <th>600078</th>
                    </tr>
                </table>
                <>
                
                </>
            </div>
        )
      }
    </div>
  );
}

export default Prescrip
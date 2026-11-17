import { useState, useEffect } from "react";
// We have to import the images first
import Sunny from "./sun.png"; 
import Cloudy from "./cloudy.png"; 
import Rainy from "./heavy-rain.png";

function WeatherWidget({ pic: selectedWeather }) { // Emoji selected as property
  const [image, setImage] = useState(Sunny); // Create variable image & function setImage (image initialized as sun image)
  const [count, setCount] = useState(0); // Create variable count & function setCount (count initialized as 0)
 
  useEffect(() => { // Update pic state based on weather property
    const weatherImages = { // Images to be used
      Sunny, 
      Cloudy, 
      Rainy, 
    }; 
 
    setImage(weatherImages[selectedWeather] || Love); 
  }, [selectedWeather]); 
 
  const handleClick = () => { // Increment count by 1
    setCount((prevCount) => prevCount + 1); 
  }; 
 
  return ( // Button rendered with image and click counter
    <div className="App"> 
      <p> 
        {selectedWeather} 
        <button type="button" onClick={handleClick}> 
          {count} 
          <img src={image} alt={selectedWeather} /> 
        </button> 
      </p> 
 
  <p>&nbsp;</p> 
    </div> 
  ); 
} 
 
export default WeatherWidget;
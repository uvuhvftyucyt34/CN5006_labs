import { useState, useEffect } from "react";
// We have to import the images first
import Love from "./Love.png"; 
import Sad from "./Sad.png"; 
import Like from "./Like.png";

function EmojiCounter({ pic: selectedEmoji }) { // Emoji selected as property
  const [image, setImage] = useState(Love); // Create variable image & function setImage (image initialized as love image)
  const [count, setCount] = useState(0); // Create variable count & function setCount (count initialized as 0)
 
  useEffect(() => { // Update pic state based on emoji property
    const emojiImages = { // Images to be used
      Love, 
      Like, 
      Sad, 
    }; 
 
    setImage(emojiImages[selectedEmoji] || Love); 
  }, [selectedEmoji]); 
 
  const handleClick = () => { // Increment count by 1
    setCount((prevCount) => prevCount + 1); 
  }; 
 
  return ( // Button rendered with image and click counter
    <div className="App">  
      <p> 
        {selectedEmoji} 
        <button type="button" onClick={handleClick}> 
          {count} 
          <img src={image} alt={selectedEmoji} /> 
        </button> 
      </p> 
 
  <p>&nbsp;</p> 
    </div> 
  ); 
} 
 
export default EmojiCounter;
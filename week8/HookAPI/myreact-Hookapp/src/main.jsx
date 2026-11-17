import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClickCounter from './Counter' 
import EmojiCounter from './EmojeeCounter' 
import WeatherWidget from './WeatherMoodWidget'

createRoot(document.getElementById('root')).render(
<StrictMode>
<h1>How are you feeling?</h1>
<WeatherWidget pic='Sunny'/>
<a href="https://www.flaticon.com/free-icons/sunny" title="sunny icons">Sunny icons created by Magnific - Flaticon</a>
<WeatherWidget pic='Cloudy'/>
<a href="https://www.flaticon.com/free-icons/weather" title="weather icons">Weather icons created by iconixar - Flaticon</a>
<WeatherWidget pic='Rainy'/>
<a href="https://www.flaticon.com/free-icons/rain" title="rain icons">Rain icons created by apien - Flaticon</a>
</StrictMode>, 
)
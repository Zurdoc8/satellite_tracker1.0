
import { config } from './config.js';

// Blast Off click randomly generates image from API 
var imageBtn = document.getElementById('exploreBtn');
var spaceImage = document.getElementById('images');
var imageUrl = 'https://api.nasa.gov/planetary/apod?api_key='
var imageKey = config.nasa_api_key

console.log(imageKey, 'key')

imageBtn.addEventListener('click', function () {
    const fetchNASAData = async () => {
        try {
            const response = await fetch(imageUrl + imageKey)
            const data = await response.json()
            console.log('NASA APOD data', data)
        } catch (error) {
            console.log(error)
        }
    }

    fetchNASAData()
})













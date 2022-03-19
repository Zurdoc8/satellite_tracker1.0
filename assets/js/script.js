

// Blast Off click randomly generates image from API 
var imageBtn = document.getElementById('exploreBtn');
var spaceImage = document.getElementById('images');
var imageUrl = 'https://api.nasa.gov/planetary/apod?api_key=Jmooles2hiSkfkS4ibQMjXPovBcmyRlbq31RfhiQ'
var imageInfo = document.getElementById('image-description');


imageBtn.addEventListener('click', function () {
    const fetchNASAData = async () => {
        try {
            const response = await fetch(imageUrl)
            const data = await response.json()
        
            nasaImage(data) 
        } catch (error) {
            console.log(error)
        }
    }

    fetchNASAData()

    // Display image in HTML
    function nasaImage(inputParam) {
        console.log('inputParam', inputParam)

        var img = new Image();
        img.src = inputParam.url;
        spaceImage.appendChild(img);

        // Display image info in HTML
        imageInfo.innerHTML = inputParam.explanation;
    } 

})














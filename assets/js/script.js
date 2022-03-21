

// Blast Off click randomly generates image from API 
var imageBtn = document.getElementById('exploreBtn');
var spaceImage = document.getElementById('images');
var imageUrl = 'https://api.nasa.gov/planetary/apod?api_key=Jmooles2hiSkfkS4ibQMjXPovBcmyRlbq31RfhiQ';
var imageInfo = document.getElementById('image-description');
var satURL = 'https://api.n2yo.com/rest/v1/satellite/';
var satCoords; 



imageBtn.addEventListener('click', function () {
    const fetchNASAData = async () => {
        try {
            const response = await fetch(imageUrl)
            const data = await response.json()
        
            // Retrievs satellite info/lat and long
            nasaImage(data) 

            let selectValue  = $("#selectSats").val();
            
            console.log(selectValue);               
            let settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "https://uphere-space1.p.rapidapi.com/satellite/" +selectValue+ "/location?units=imperial&lng=122.374199&lat=47.6484346",
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-host": "uphere-space1.p.rapidapi.com",
                            "x-rapidapi-key": "73d7512d46msh8fd2715f8330786p168bd7jsnbd8ccc7c4fa1"
                        }
                    };
                    
                    satCoord(settings);
                
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

    
    function satCoord(settings){
        $.ajax(settings).done(function (response) {
            console.log(response);
            
            
            satCoords = response.coordinates;
            console.log(satCoords)

            var map = L.map('map').setView(satCoords.reverse(), 13);
    

            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiZHJhZXNtaXRoIiwiYSI6ImNsMTB5bWwyeTAxc3Mzam5wYnlnMHgyaDQifQ.Tg2IIHMMczRELrZ4h_sYLA'

             }).addTo(map);

        });
    }

    
    
    
});
















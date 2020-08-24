const btn =  document.querySelector(".start")
const bg = document.querySelector(".bgChange")
const latitude = document.getElementById("lat")
const longitude = document.getElementById("lon")
if('geolocation' in navigator) {
  
    navigator.geolocation.getCurrentPosition((position) => {
        btn.addEventListener("click",()=>{
            btn.style.display = "none"
            bg.style.display = "block"
           const mymap = L.map('mapid').setView([0,0], 1);
           const attribution =
           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap </a>  contributors'
           const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
            const tiles = L.tileLayer(tileUrl,{attribution})
            tiles.addTo(mymap)
            const marker = L.marker([0,0]).addTo(mymap)
            let lan = position.coords.latitude
            let lon = position.coords.longitude
            latitude.innerHTML = lan.toFixed(2)
            longitude.innerHTML = lon.toFixed(2)
            marker.setLatLng([lan,lon])
            mymap.setView([lan,lon],4)
            document.getElementById("h1").innerHTML = "We Think This is your Location My Friend"
        
         
        })
      });
   
    
  } else {
    console.log("geolocation is not available"); 
    btn.addEventListener("click",()=>{
        document.getElementById("h1").innerHTML = "please connect to the internet"
        /* geolocation IS NOT available */

    })
  
  }


let latitudine = 41.93402223553517;
let longitudine = 12.454113036228433;
 
 
 navigator.geolocation.getCurrentPosition(
 function (event){ 
    console.log("L'utente ha accettato")
    console.log(event)
    latitudine = event.coords.latitude
    longitudine = event.coords.longitude
    CreateMap()

 },
 function (event){
    console.log("L'utente non ha accettato")
    console.log(event)
    CreateMap()
    
 }
 )
 function CreateMap(){
   let map = L.map('map').setView(latitudine,longitudine, 16);
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
 }
let marker = L.marker([51.5, -0.09]).addTo(map);
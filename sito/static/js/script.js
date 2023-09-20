let latitudine = 41.93402223553517;
let longitudine = 12.454113036228433;
 
 
 navigator.geolocation.getCurrentPosition(
 function (event){ 
    console.log("L'utente ha accettato")
    console.log(event)
    latitudine = event.coords.latitude
    longitudine = event.coords.longitude
    CreateMap(latitudine, longitudine)

 },
 function (event){
    console.log("L'utente non ha accettato")
    console.log(event)
    CreateMap(latitudine, longitudine)
    
 }
 )
 function CreateMap(latitudine, longitudine){
   let map = L.map('map').setView([latitudine,longitudine] ,11);
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);  


let marker = L.marker([latitudine,longitudine]).addTo(map);

map.on("click",function (event) {
   console.log(event)
   marker.remove()
   marker = L.marker([event.latlng.lat, event.latlng,lng]),assto(map)
})
 }

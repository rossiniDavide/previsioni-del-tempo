 let longitudine = 12.454113036228433;
 let latitudine = 41.93402223553517;
 
 navigator.geolocation.getCurrentPosition()
 function (event){ 
    console.log("L'utente ha accettato")
    console.log(event)
    CreateMap()

 },
 function (event){
    console.log("L'utente ha accettato")
    console.log(event)
    
 }
 function CreateMap (){
   let map = L.map('map').setView(latitudine,longitudine, 16);
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
 }
let marker = L.marker([51.5, -0.09]).addTo(map);
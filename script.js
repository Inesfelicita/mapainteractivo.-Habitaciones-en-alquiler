// Iniciar el mapa centrado en Maracaibo
var map = L.map('map').setView([10.654, -71.634], 13); // Coordenadas de Maracaibo

// Añadir capa de mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Función para crear un marcador personalizado con el precio flotando arriba
function createCustomMarker(lat, lng, price) {
  var customIcon = L.divIcon({
    className: 'custom-marker',
    html: '<div>' + price + '</div>',
    iconSize: [30, 15]  // Ajusta el tamaño del icono según sea necesario
  });
  L.marker([lat, lng], { icon: customIcon }).addTo(map);
}

 // Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.688, -71.627]).addTo(map)
  .bindPopup('<b>Habitación privada en Alquiler.</b> Residencia Estudiantil. Chica o Chico estudiante. Baño compartido. <b>50$ mensuales</b>. Incluye todos los servicios. Cond. 2/1/1 + Doc. 40$. TOTAL= 240$. <b>Cod. RKIILT.</b>')
  .openPopup();

// Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.677, -71.649]).addTo(map)
  .bindPopup('<b>Habitación compartida en Alquiler para dama estudiante.</b>Baño compartido. <b>50$ mensuales</b>. Incluye todos los servicios. Cond. 1/1/1. TOTAL= 150$. <b>Cod. RKIGLO.</b>')
  .openPopup();
  
 // Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.695, -71.635]).addTo(map)
  .bindPopup('<b>Habitación privada o compartida en Alquiler.</b> Chicas o Chicos (no mixta). Baño privado o compartido. <b>120$ o 70$ mensuales</b>. Incluye todos los servicios. Cond. 2/1/1. TOTAL= 480$ privada 280$ compartida. <b>Cod. RKIILJ.</b>')
  .openPopup();
  
// Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.692, -71.622]).addTo(map)
  .bindPopup('<b>Habitación privada en Alquiler.</b> Chica o Chico. Dama o Caballero. Baño privado. <b>60$</b>. Incluye servicios, internet se paga aparte fraccionado. Tiene estacionamiento. Cond. 1/1/1. TOTAL= 180$. <b>Cod. RKIILP1.</b>')
  .openPopup();
  
// Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.696, -71.638]).addTo(map)
  .bindPopup('<b>Anexo para estudiante.</b> Chica o Chico. Dama o Caballero. Habitación con cama/Baño/sala/LLevar cocina eléctrica. Para una sola persona.<b>80$</b>. Incluye todos los servicios. Cond. 1/1/1. TOTAL= 180$. <b>Cod. RKIIPT.</b>')
  .openPopup();
  
// Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.663, -71.670]).addTo(map)
  .bindPopup('<b>Habitación privada para Dama en alquiler.</b> Baño compartido. <b>60$</b>. Totalmente equipada.Incluye todos los servicios. Cond. 1/1/1. TOTAL= 180$. <b>Cod. RKIMA.</b>')
  .openPopup();
  
// Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.665, -71.603]).addTo(map)
  .bindPopup('<b>Habitación privada para Dama en alquiler.</b> Baño compartido. <b>100$ mensuales</b>. Totalmente Equipada.Incluye todos los servicios. Cond. 1/1/1. TOTAL= 300$. <b>Cod. RKIDVF.</b>')
  .openPopup();
 
// Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.681, -71.607]).addTo(map)
  .bindPopup('<b>Habitación privada para Joven o Caballero en alquiler.</b> Baño compartido. <b>60$ mensuales</b>. Totalmente Equipada. Incluye todos los servicios. No tiene estacionamiento. Cond. 1/1/1. TOTAL= 180$. <b>Cod. RKIEBV.</b>')
  .openPopup();
  
// Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.690, -71.635]).addTo(map)
  .bindPopup('<b>Habitación privada para Dama, Caballero o Estudiante en alquiler.</b> Baño compartido. <b>100$ mensuales</b>. Totalmente Equipada. Incluye todos los servicios. Cond. 1/1/1. TOTAL= 300$. <b>Cod. RKIMP</b>')
  .openPopup();
  
  // Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.644, -71.614]).addTo(map)
  .bindPopup('<b>Habitación privada para Dama, Caballero o Estudiante en alquiler.</b> Baño compartido. Se aceptan vistas de pareja (para pecnortar dos veces a la semana). <b>100$ mensuales</b>. Totalmente Equipada. Incluye todos los servicios. Tiene estacionamiento. Cond. 1/1/1. TOTAL= 300$. <b>Cod. RKIATS</b>')
  .openPopup();
  
   // Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.640, -71.614]).addTo(map)
  .bindPopup('<b>Habitación privada para Dama, Caballero o Estudiante en alquiler.</b> Baño compartido. Se aceptan vistas de pareja (para pernoctar dos veces a la semana). <b>100$ mensuales</b>. Totalmente Equipada. Incluye todos los servicios. Tiene estacionamiento. Cond. 1/1/1. TOTAL= 300$. <b>Cod. RKIATS2</b>')
  .openPopup();
  
   // Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.655, -71.620]).addTo(map)
  .bindPopup('<b>Habitación privada para Dama, Caballero o Estudiante en alquiler.</b> Baño privado. <b>150$ mensuales</b>. Totalmente Equipada. Incluye todos los servicios. Tiene estacionamiento. Cond. 1/1/1. TOTAL= 450$. <b>Cod. RKIAV</b>')
  .openPopup();
  
   // Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.665, -71.592]).addTo(map)
  .bindPopup('<b>Habitación privada para Dama, Caballero o Estudiante.</b> Baño privado. <b>100$ mensuales</b>. Totalmente Equipada. Incluye todos los servicios. Tiene estacionamiento. Visitas previa autorización del propietario. Cond. 1/1/1. TOTAL= 300$. <b>Cod. RKIJSM1</b>')
  .openPopup();

  // Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.669, -71.592]).addTo(map)
  .bindPopup('<b>Habitación privada para Pareja.</b> Baño privado. <b>150$ mensuales</b>. Totalmente Equipada. Incluye todos los servicios. Tiene estacionamiento. Cond. 1/1/0,67. TOTAL= 400$. <b>Cod. RKIJSM2</b>')
  .openPopup();

// Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.704, -71.639]).addTo(map)
  .bindPopup('<b>Habitación privada para Pareja.</b> Baño compartido. <b>70$ mensuales</b>. Semi equipada. Incluye todos los servicios. No Tiene estacionamiento. Sin deposito. Cond. 2/1 TOTAL= 210$. <b>Cod. RKIPEC1</b>')
  .openPopup();
  
  // Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.703, -71.639]).addTo(map)
  .bindPopup('<b>Habitación privada para Dama, Caballero o Estudiante.</b> Baño compartido. <b>60$ mensuales</b>. Semi equipada. Incluye todos los servicios. No Tiene estacionamiento. Sin deposito. Cond. 2/1 TOTAL= 180$. <b>Cod. RKIPEC2</b>')
  .openPopup();
  
  // Añadir marcador en de Maracaibo con título en negrita
var marker = L.marker([10.689, -71.631]).addTo(map)
  .bindPopup('<b>Habitación privada para Caballero o Estudiante.</b> Baño privado. <b>80$ mensuales</b>. Completamente Equipada. Incluye todos los servicios. No Tiene estacionamiento. Sin deposito. Cond. 1/1 TOTAL= 160$. <b>Cod. RKILLT</b>')
  .openPopup();
// Función para añadir un nuevo marcador
function addMarker(lat, lng, description) {
  L.marker([lat, lng]).addTo(map)
    .bindPopup(description)
    .openPopup();
}

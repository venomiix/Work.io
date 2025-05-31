// WORK/app.js

console.log('JS працює');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Сторінка повністю завантажена!');
});





  //Vinitsia
var map = L.map('map').setView([49.2331, 28.4682], 13);

L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=r1J4dbqT4CFQR11lLe9T#15.6/48.45092/27.80513', {
    tileSize: 512,
    zoomOffset: -1,
    attribution: 'Юрченко Валерій'
}).addTo(map);



L.marker([49.2331, 28.4682]).addTo(map)
    .bindPopup('Вінниця.')
    .openPopup();

    L.marker([49.2434, 28.4815]).addTo(map)
        .bindPopup ('*');
        

    window.addEventListener('resize', function() {
        map.invalidateSize();
    });

    

    // Карта могилів подільськ
    var map2 = L.map('map2').setView([48.4587, 27.7924], 13);

    L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=r1J4dbqT4CFQR11lLe9T#15.6/48.45092/27.80513', {
        tileSize: 512,
        zoomOffset: -1,
    attribution: 'Могилів Подільський'
}).addTo(map2);

L.marker([48.4587, 27.7924]).addTo(map2)
    .bindPopup('Могилів – Подільськ.')
    .openPopup();


    window.addEventListener('resize', function() {
        map2.invalidateSize();
    });
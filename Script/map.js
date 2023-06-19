let map;
let marker;
function initMap ()
  {
  map = new ymaps.Map("map", {
    center: [55.625552, 40.630387],
    zoom: 16
    });
  marker = new ymaps.Placemark([55.625552, 40.630387], {
    hintContent: 'Расположение',
    balloonContent: 'Это наша организация'
    });
  map.geoObjects.add(marker);
  }
ymaps.ready(initMap);
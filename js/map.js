var myMap;
var myPlacemark;
if (window.ymaps) {
    ymaps.ready(init);
}
function init() {
    myMap = new ymaps.Map("map", {
        center: [59.938826, 30.322876],
        zoom: 16,
        controls: []
    });
    myPlacemark = new ymaps.Placemark([59.938848, 30.322954], {
        hintContent: "Мы здесь!"
    }, {
            iconLayout: "default#image",
            iconImageHref: "img/icon-map-pin.svg",
            iconImageSize: [67, 100],
            iconImageOffset: [-34, -100]

        });
    myMap.geoObjects
        .add(myPlacemark);
}

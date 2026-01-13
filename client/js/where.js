mapboxgl.accessToken = 'pk.eyJ1IjoianJiLTA2IiwiYSI6ImNta2F6N3k4NjAyczkzZHB4NXNlemkzZnIifQ.s-Ka6q9VsYATo3_s8p3vkA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/standard', 
    projection: 'globe', 
    zoom: 10.43, 
    center: [124.9922, 11.2224] 
    
});


map.on('style.load', () => {
    const search = new MapboxSearchBox();
    search.accessToken = 'pk.eyJ1IjoianJiLTA2IiwiYSI6ImNta2F6N3k4NjAyczkzZHB4NXNlemkzZnIifQ.s-Ka6q9VsYATo3_s8p3vkA';
    map.addControl(search);
    map.setFog({}); 
    map.addControl(new mapboxgl.NavigationControl());
    map.scrollZoom.disable();
});
map.on('click', (e) => {
    console.log(`Clicked at: ${e.lngLat.lng}, ${e.lngLat.lat}`);
    const long = document.getElementById('longitude')
    const lat = document.getElementById('latitude')
    long.value = `longitude: ${e.lngLat.lng}`
    lat.value = `latitude: ${e.lngLat.lat}`
});


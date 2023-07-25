window.addEventListener('load', function () {
    const container = document.getElementById('container');
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
.then(Response => Response.json()) 
.then(data => {
    data.forEach(astronaut => {
        const astronautCard = createAstronautCard(astronaut);
        container.appendChild(astronautCard);
    });
}); 
.catch(error => {
    console.error('Error fetching astronauts', error);
});
}); 
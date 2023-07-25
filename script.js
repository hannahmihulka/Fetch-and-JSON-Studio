window.addEventListener('load', function () {
    const container = document.getElementById('container');
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then(response => response.json()) 
    .then (data => {
        console.log(data)
    })
}); 

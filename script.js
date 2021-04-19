console.log("About to fetch an image");

fetch('images/image.jpg')
    .then(response => {
        console.log(response);
        document.getElementById("fetchThis").src = response.url;
    })
    .catch(error => { console.error(error) })
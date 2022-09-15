window.onload = function() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=RILY2OIr8fyDVe1AAeQXaoIagYN7xyFVjqMGxuCX",
        {
            method: "GET",
            headers:{},
        })
        .then(response => {return response.json()})
        .then(data => insertarImagen(data))
    .catch(err =>{alert("No hay dato")});
}

function insertarImagen(data){
    console.log(data);

    var multimedia = document.getElementById("imagenNASA");
    multimedia.innerHTML = (`<img src="${data.hdurl}" width="50%" heigh="auto">`);
}


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
    var tituloImagen = document.getElementById("tituloImagen");
    var autor = document.getElementById("autor");
    var fecha = document.getElementById("fecha");
    var descrip = document.getElementById("descripcion");

    multimedia.innerHTML = (`<img src="${data.hdurl}" width="100%" heigh="auto">`);
    tituloImagen.textContent = data.title;
    autor.textContent = data.copyright;
    fecha.textContent = data.date;
    descrip.textContent = data.explanation;
}


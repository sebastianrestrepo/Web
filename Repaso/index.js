var count = 0;
var imgs = ['imagenes/cover.png', 'imagenes/cover2.jpg', 'imagenes/cover3.jpg'];
var boton = document.getElementById("boton");
//boton.addEventListener("click", mostrarTexto);

function cambioCover() {
    console.log('hi');
    var header = document.querySelector("header");
    header.style.backgroundImage = 'url(' + imgs[count] + ')';
}

function mostrarTexto() {
    var p = document.querySelector(".adicional");
    p.style.display = "block";
    boton.remove();
}

boton.onclick = function () {
    mostrarTexto();
    /*alert("clicked!");*/
}


setInterval(function () {
    count++;
    if (count > 2) {
        count = 0;
    }
    cambioCover();
    console.log(imgs[count]);
}, 5000);

//Objeto que representa las temporadas
var temporada = {
    imgCover: "",
    numTemp: "5",
    year: "2013",
    episodios: "3",
};

var nuevaTemporada = ["resources/ep1.jpg", "5", "2015", "25min"];

var temporadaList = {
    temporadas: [],

    addTemporada: function (imgCover, numEp, year, episodios) {
        this.temporada.push({
            imgval: imgCover,
            numTempval: numTep,
            yearval: year,
            episodiosval: episodios,
        });
    }
};

//PARA MANEJAR LAS ACCIONES DESDE EL HTML
var handlers = {
    addTemporada: function () {
        temporadaList.addTemporada("imagenes/sherlock1.png", "5", "2013", "3");
        temporadaList.addTemporada("imagenes/sherlock1.png", "5", "2013", "3");
        temporadaList.addTemporada("imagenes/sherlock1.png", "5", "2013", "3");
        view.displayTemporadas();
    },
}

//PARA QUE SE CREE EL HTML Y VER LOS TEMPORADAS
var view = {
    displayTemporadas: function () {
        //ENCONTRAR LA SECCION DE TEMPORADA
        var tempsSection = $(".articulos");
        tempsSection.innerHtml = '';

        var ul = document.createElement('ul');
        tempsSection.appendChild('ul');

        temporadaList.temporadas.forEach(function (temporadaNew) {
            //CREAR EL DIV DEL EPISODIO
            var innerTempDiv = document.createElement('div');
            innerTempDiv.className = 'articuloChart';

            //Crear la imagen
            innerTempDiv.style.backgroundImage = "imagenes/sherlock" + 1 + ".png";

            // CREAR EL DIV DEL TITULO
            var innerDiv = document.createElement('div');
            innerDiv.textContent = 'Temporada' + temporadaNew.numTempval;
            innerTempDiv.appendChild(innerDiv);

            // CREAR EL DIV DEL AÑO
            var innerDiv2 = document.createElement('div');
            innerDiv2.textContent = 'Año' + temporadaNew.yearval;
            innerEpisodeDiv.appendChild(innerDiv2);

            // CREAR EL DIV DE NUM EPISODIOS
            var innerDiv3 = document.createElement('div');
            innerDiv3.textContent = temporadaNew.episodiosval + 'Epi';
            innerEpisodeDiv.appendChild(innerDiv3);

        }, this);
    }
}
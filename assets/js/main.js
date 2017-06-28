var cargarPagina = function () {
    cargarAlumnas();
}

var cargarAlumnas = function() {
    var url = 'https://laboratoria.cuadra.co/api/v1/students/';
     $.getJSON(url, function (response) {

         var nombre = response;
        crearLista(nombre);
  });    
};

var crearLista = function (nombres) {
    var $divLista = $('#asistencia');
    var $olLista = $('<ol />');
    
    
    nombres.forEach(function (nombre) {
        
        var $liLista = $('<li />');
        var $btnCheckbox = $('<input />');
        
        $btnCheckbox.attr('type', 'checkbox');
        $liLista.text(nombre.name + ' ' + nombre.pLastName);
        
        $liLista.append($btnCheckbox);
        $olLista.append($liLista);
    
    });
    $divLista.append($olLista);
}



$(document).ready(cargarPagina);
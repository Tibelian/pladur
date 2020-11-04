
// variable global
let DATOS = [];

// prepara el formulario
window.onload = () => {

    let formulario = document.getElementById("formulario");
        formulario.onsubmit = (e) => {
            e.preventDefault();
            guardarDatosTabla(formulario);
        };
        formulario.altura.onchange = () => {
            let area = calculaArea(formulario.altura.value, formulario.anchura.value);
            formulario.area.value = area;
            let coste_total = calculaCosteTotal(formulario.coste.value, formulario.area.value);
            formulario.coste_total.value = coste_total;
        };
        formulario.anchura.onchange = () => {
            let area = calculaArea(formulario.altura.value, formulario.anchura.value);
            formulario.area.value = area;
            let coste_total = calculaCosteTotal(formulario.coste.value, formulario.area.value);
            formulario.coste_total.value = coste_total;
        };
        formulario.coste.onchange = () => {
            let coste_total = calculaCosteTotal(formulario.coste.value, formulario.area.value);
            formulario.coste_total.value = coste_total;
        };

};


// guarda los datos en la tabla
function guardarDatosTabla(form) {

    let filas = document.getElementById("filas");
    let tr = document.createElement("tr");
    let tdOpcion = document.createElement("td");
    let tdAltura = document.createElement("td");
    let tdAnchura = document.createElement("td");
    let tdArea = document.createElement("td");
    let tdCoste = document.createElement("td");
    let tdTotal = document.createElement("td");
    let tdEliminar = document.createElement("td");

    tdOpcion.appendChild(document.createTextNode(form.opcion.value));
    tdAltura.appendChild(document.createTextNode(form.altura.value));
    tdAnchura.appendChild(document.createTextNode(form.anchura.value));
    tdArea.appendChild(document.createTextNode(form.area.value));
    tdCoste.appendChild(document.createTextNode(form.coste.value));
    tdTotal.appendChild(document.createTextNode(form.coste_total.value));
    tdEliminar.appendChild(generaBotonEliminarFila(tr));

    tr.appendChild(tdOpcion);
    tr.appendChild(tdAltura);
    tr.appendChild(tdAnchura);
    tr.appendChild(tdArea);
    tr.appendChild(tdCoste);
    tr.appendChild(tdTotal);
    tr.appendChild(tdEliminar);

    filas.appendChild(tr);
    
}

function generaBotonEliminarFila(fila) {

    let icono = document.createElement("i");
        icono.classList.add("fas", "fa-minus");
    let boton = document.createElement("button");
        boton.classList.add("btn", "btn-sm", "btn-danger");

    boton.appendChild(icono);

    boton.onclick = (e) => {
        e.preventDefault();
        fila.parentNode.removeChild(fila);
    }

    return boton;
}

function calculaArea(_altura, _anchura) {
    let altura = parseFloat(_altura);
    let anchura = parseFloat(_anchura);
    return altura * anchura;
}
function calculaCosteTotal(_coste, _area) {
    let coste = parseFloat(_coste);
    let area = parseFloat(_area);
    return coste * area;
}


// muestra una alerta con el texto indicado
function nuevaAlerta(tipo, mensaje) {
    alert(mensaje);
}
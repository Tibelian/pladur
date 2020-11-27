

// prepara el formulario para agregar elemento a la lista
window.onload = () => {

    let formulario = document.getElementById("formulario");
        formulario.onsubmit = (e) => {
            e.preventDefault();
            generaElemento(formulario);
            formulario.reset();
        };

        
};


// genera el elemento según la opción
function generaElemento(form) {

    let lista = document.getElementById("lista");
    let idFormulario = "el" + Math.floor((Math.random() * 10000000) + 1);

    let formularioGenerado = generaFormulario(form.opcion.value);
    let filaFormulario = document.createElement("form");
        filaFormulario.appendChild(formularioGenerado);
        filaFormulario.id = idFormulario;

    let fila = document.createElement("div");
        fila.classList.add("bg-white", "col-12", "shadow-sm", "p-1", "border-bottom", "bg-hover");

    let filaTitulo = document.createElement("h5");
        filaTitulo.classList.add("text-uppercase");
        filaTitulo.appendChild(document.createTextNode(form.opcion.options[form.opcion.selectedIndex].text));
        filaTitulo.classList.add("mr-2")

    let filaModificar = document.createElement("button");
        filaModificar.classList.add("btn", "btn-sm", "btn-primary", "mr-2");
        filaModificar.type = "submit";
        filaModificar.appendChild(document.createTextNode("Guardar"));
        filaModificar.setAttribute("form", idFormulario);
        
        filaFormulario.onsubmit = (ev) => {
            ev.preventDefault();
            guardarDatos(filaModificar, filaFormulario);
        };

    let filaCabecera = document.createElement("div");
        filaCabecera.classList.add("d-flex", "justify-content-center");
        filaCabecera.appendChild(filaTitulo);
        filaCabecera.appendChild(filaModificar);
        filaCabecera.appendChild(generaBotonEliminarFila(fila));

    fila.appendChild(filaCabecera);
    fila.appendChild(filaFormulario);

    lista.appendChild(fila);

    actualizaCantidad();
    
}


// 
function generaFormulario(opcion) {

    let fieldset = document.createElement("fieldset");
        fieldset.classList.add("d-flex", "justify-content-around");

    switch (opcion) {

        ///////////////////////////////////////////////////////////
        case "techo":

            let techoGrupo1 = document.createElement("div");
                techoGrupo1.classList.add("form-group", "col-5");
                fieldset.appendChild(techoGrupo1);

            let techoLongitud = document.createElement("input");
            let techoAnchura = document.createElement("input");

            let techoAnchuraLabel = document.createElement("label");
                techoAnchuraLabel.classList.add("mx-2");
                techoAnchuraLabel.appendChild(document.createTextNode("Ancho: "));
                techoAnchuraLabel.appendChild(techoAnchura);
                techoGrupo1.appendChild(techoAnchuraLabel);
            let techoLargoLabel = document.createElement("label");
                techoLargoLabel.classList.add("mx-2");
                techoLargoLabel.appendChild(document.createTextNode("Largo: "));
                techoLargoLabel.appendChild(techoLongitud);
                techoGrupo1.appendChild(techoLargoLabel);

            techoAnchura.classList.add("form-control", "form-control-sm");
            techoLongitud.classList.add("form-control", "form-control-sm");
            techoAnchura.name = "ancho";
            techoLongitud.name = "longitud";
            techoAnchura.type = "number";
            techoLongitud.type = "number";
            techoAnchura.step = "any";
            techoLongitud.step = "any";
            techoAnchura.required = true;
            techoLongitud.required = true;
            techoAnchura.placeholder = "Escribe la anchura";
            techoLongitud.placeholder = "Escribe la longitud";

            let techoGrupo2 = document.createElement("div");
                techoGrupo2.classList.add("form-group");
                fieldset.appendChild(techoGrupo2);
                
            let techoCoste = document.createElement("input");
            let techoPorcentaje = document.createElement("input");

            let techoCosteLabel = document.createElement("label");
                techoCosteLabel.classList.add("mx-2");
                techoCosteLabel.appendChild(document.createTextNode("Coste: "));
                techoCosteLabel.appendChild(techoCoste);
                techoGrupo2.appendChild(techoCosteLabel);

            let techoPorcentajeLabel = document.createElement("label");
                techoPorcentajeLabel.classList.add("mx-2");
                techoPorcentajeLabel.appendChild(document.createTextNode("Completado: "));
                techoPorcentajeLabel.appendChild(techoPorcentaje);
                techoGrupo2.appendChild(techoPorcentajeLabel);

                techoCoste.classList.add("form-control", "form-control-sm");
                techoPorcentaje.classList.add("form-control-range");
                techoCoste.name = "coste";
                techoPorcentaje.name = "porcentaje";
                techoCoste.type = "number";
                techoPorcentaje.type = "range";
                techoCoste.step = "any";
                techoCoste.required = true;
                techoCoste.placeholder = "Introduce el precio";

            let techoGrupo3 = document.createElement("div");
                techoGrupo3.classList.add("form-group");
                fieldset.appendChild(techoGrupo3);

            let techoTotalArea = document.createElement("p");
                techoGrupo3.appendChild(techoTotalArea);
            let techoTotalCoste = document.createElement("p");
                techoGrupo3.appendChild(techoTotalCoste);

            techoAnchura.onchange = () => {
                let area = calculaArea(techoLongitud.value, techoAnchura.value);
                techoTotalArea.innerHTML = "Área = <strong>" + area + "</strong>";
                techoTotalCoste.innerHTML = "Coste Total = <strong>" + calculaCosteTotal(techoCoste.value, area) + " €</strong>";
            };
            techoLongitud.onchange = () => {
                let area = calculaArea(techoLongitud.value, techoAnchura.value);
                techoTotalArea.innerHTML = "Área = <strong>" + area + "</strong>";
                techoTotalCoste.innerHTML = "Coste Total = <strong>" + calculaCosteTotal(techoCoste.value, area) + " €</strong>";
            };
            techoCoste.onchange = () => {
                let area = calculaArea(techoLongitud.value, techoAnchura.value);
                techoTotalArea.innerHTML = "Área = <strong>" + area + "</strong>";
                techoTotalCoste.innerHTML = "Coste Total = <strong>" + calculaCosteTotal(techoCoste.value, area) + " €</strong>";
            };

            return fieldset;
        ///////////////////////////////////////////////////////////

        ///////////////////////////////////////////////////////////
        case "tabique1":

            let tabique1Grupo1 = document.createElement("div");
                tabique1Grupo1.classList.add("form-group", "col-5");
                fieldset.appendChild(tabique1Grupo1);

            let tabique1Longitud = document.createElement("input");
            let tabique1LongitudLabel = document.createElement("label");
                tabique1LongitudLabel.classList.add("mx-2");
                tabique1LongitudLabel.appendChild(document.createTextNode("Largo: "));
                tabique1LongitudLabel.appendChild(tabique1Longitud);
                tabique1Grupo1.appendChild(tabique1LongitudLabel);

            tabique1Longitud.classList.add("form-control", "form-control-sm");
            tabique1Longitud.name = "largo";
            tabique1Longitud.type = "number";
            tabique1Longitud.step = "any";
            tabique1Longitud.required = true;
            tabique1Longitud.placeholder = "Escribe la longitud";

            let tabique1Grupo2 = document.createElement("div");
                tabique1Grupo2.classList.add("form-group");
                fieldset.appendChild(tabique1Grupo2);
                
            let tabique1Coste = document.createElement("input");
            let tabique1Porcentaje = document.createElement("input");

            let costeLabel = document.createElement("label");
                costeLabel.classList.add("mx-2");
                costeLabel.appendChild(document.createTextNode("Coste: "));
                costeLabel.appendChild(tabique1Coste);
                tabique1Grupo2.appendChild(costeLabel);

            let porcentajeLabel = document.createElement("label");
                porcentajeLabel.classList.add("mx-2");
                porcentajeLabel.appendChild(document.createTextNode("Completado: "));
                porcentajeLabel.appendChild(tabique1Porcentaje);
                tabique1Grupo2.appendChild(porcentajeLabel);

                tabique1Coste.classList.add("form-control", "form-control-sm");
                tabique1Porcentaje.classList.add("form-control-range");
                tabique1Coste.name = "coste";
                tabique1Porcentaje.name = "porcentaje";
                tabique1Coste.type = "number";
                tabique1Porcentaje.type = "range";
                tabique1Coste.step = "any";
                tabique1Coste.required = true;
                tabique1Coste.placeholder = "Introduce el precio";

            let tabique1Grupo3 = document.createElement("div");
                tabique1Grupo3.classList.add("form-group");
                fieldset.appendChild(tabique1Grupo3);

            let tabique1TotalCoste = document.createElement("p");
                tabique1Grupo3.appendChild(tabique1TotalCoste);

            tabique1Longitud.onchange = () => {
                tabique1TotalCoste.innerHTML = "Coste Total = <strong>" + calculaCosteTotal(tabique1Coste.value, tabique1Longitud.value) + " €</strong>";
            };
            tabique1Coste.onchange = () => {
                tabique1TotalCoste.innerHTML = "Coste Total = <strong>" + calculaCosteTotal(tabique1Coste.value, tabique1Longitud.value) + " €</strong>";
            };

            return fieldset;
        ///////////////////////////////////////////////////////////

        ///////////////////////////////////////////////////////////
        case "tabique2":
            
            let tabique2Grupo1 = document.createElement("div");
            tabique2Grupo1.classList.add("form-group", "col-5");
            fieldset.appendChild(tabique2Grupo1);

            let tabique2Longitud = document.createElement("input");
            let tabique2Anchura = document.createElement("input");

            let tabique2AnchuraLabel = document.createElement("label");
                tabique2AnchuraLabel.classList.add("mx-2");
                tabique2AnchuraLabel.appendChild(document.createTextNode("Ancho: "));
                tabique2AnchuraLabel.appendChild(tabique2Anchura);
                tabique2Grupo1.appendChild(tabique2AnchuraLabel);
            let tabique2LargoLabel = document.createElement("label");
                tabique2LargoLabel.classList.add("mx-2");
                tabique2LargoLabel.appendChild(document.createTextNode("Alto: "));
                tabique2LargoLabel.appendChild(tabique2Longitud);
                tabique2Grupo1.appendChild(tabique2LargoLabel);

            tabique2Anchura.classList.add("form-control", "form-control-sm");
            tabique2Longitud.classList.add("form-control", "form-control-sm");
            tabique2Anchura.name = "ancho";
            tabique2Longitud.name = "longitud";
            tabique2Anchura.type = "number";
            tabique2Longitud.type = "number";
            tabique2Anchura.step = "any";
            tabique2Longitud.step = "any";
            tabique2Anchura.required = true;
            tabique2Longitud.required = true;
            tabique2Anchura.placeholder = "Escribe la anchura";
            tabique2Longitud.placeholder = "Escribe la altura";

            let tabique2Grupo2 = document.createElement("div");
                tabique2Grupo2.classList.add("form-group");
                fieldset.appendChild(tabique2Grupo2);
                
            let tabique2Coste = document.createElement("input");
            let tabique2Porcentaje = document.createElement("input");

            let tabique2CosteLabel = document.createElement("label");
                tabique2CosteLabel.classList.add("mx-2");
                tabique2CosteLabel.appendChild(document.createTextNode("Coste: "));
                tabique2CosteLabel.appendChild(tabique2Coste);
                tabique2Grupo2.appendChild(tabique2CosteLabel);

            let tabique2PorcentajeLabel = document.createElement("label");
                tabique2PorcentajeLabel.classList.add("mx-2");
                tabique2PorcentajeLabel.appendChild(document.createTextNode("Completado: "));
                tabique2PorcentajeLabel.appendChild(tabique2Porcentaje);
                tabique2Grupo2.appendChild(tabique2PorcentajeLabel);

                tabique2Coste.classList.add("form-control", "form-control-sm");
                tabique2Porcentaje.classList.add("form-control-range");
                tabique2Coste.name = "coste";
                tabique2Porcentaje.name = "porcentaje";
                tabique2Coste.type = "number";
                tabique2Porcentaje.type = "range";
                tabique2Coste.step = "any";
                tabique2Coste.required = true;
                tabique2Coste.placeholder = "Introduce el precio";

            let tabique2Grupo3 = document.createElement("div");
                tabique2Grupo3.classList.add("form-group");
                fieldset.appendChild(tabique2Grupo3);

            let tabique2TotalArea = document.createElement("p");
                tabique2Grupo3.appendChild(tabique2TotalArea);
            let tabique2TotalCoste = document.createElement("p");
                tabique2Grupo3.appendChild(tabique2TotalCoste);

            tabique2Anchura.onchange = () => {
                let area = calculaArea(tabique2Longitud.value, tabique2Anchura.value);
                tabique2TotalArea.innerHTML = "Área = <strong>" + area + "</strong>";
                tabique2TotalCoste.innerHTML = "Coste Total = <strong>" + calculaCosteTotal(tabique2Coste.value, area) + " €</strong>";
            };
            tabique2Longitud.onchange = () => {
                let area = calculaArea(tabique2Longitud.value, tabique2Anchura.value);
                tabique2TotalArea.innerHTML = "Área = <strong>" + area + "</strong>";
                tabique2TotalCoste.innerHTML = "Coste Total = <strong>" + calculaCosteTotal(tabique2Coste.value, area) + " €</strong>";
            };
            tabique2Coste.onchange = () => {
                let area = calculaArea(tabique2Longitud.value, tabique2Anchura.value);
                tabique2TotalArea.innerHTML = "Área = <strong>" + area + "</strong>";
                tabique2TotalCoste.innerHTML = "Coste Total = <strong>" + calculaCosteTotal(tabique2Coste.value, area) + " €</strong>";
            };
            
            return fieldset;
        ///////////////////////////////////////////////////////////

    }

    return document.createTextNode("HA OCURRIDO UN ERROR AL GENERAR EL FORMULARIO");

}


// desactiva el formulario una vez completado
function guardarDatos(boton, form) {

    boton.classList.add("d-none");

    let fieldset = form.childNodes[0];
        fieldset.classList.add("disabled");
        fieldset.disabled = true;

}


// modifica el número que indica la cantidad de elementos
// que se encuentran en el listado
function actualizaCantidad() {

    let listaCantidad = document.getElementById("cantidad");
    let cantidad = $('#lista').children('div').length;
    let texto = " elementos";
    if (cantidad == 1) {
        texto = " elemento";
    }

    listaCantidad.innerHTML = cantidad + texto;
    
}


// genera un botón que elimina cualquier elemento DOM
function generaBotonEliminarFila(fila) {

    let icono = document.createElement("i");
        icono.classList.add("fas", "fa-minus");
    let boton = document.createElement("button");
        boton.classList.add("btn", "btn-sm", "btn-danger");

    boton.appendChild(icono);

    boton.onclick = (e) => {
        e.preventDefault();
        fila.parentNode.removeChild(fila);
        actualizaCantidad();
    }
    
    return boton;
}


// operaciones matemáticas
function calculaArea(_altura, _anchura) {
    let altura = parseFloat(_altura);
    let anchura = parseFloat(_anchura);
    let resultado = altura * anchura;
    if (!isNaN(resultado)){
        return resultado;
    } else {
        return 0;
    }
}
function calculaCosteTotal(_coste, _area) {
    let coste = parseFloat(_coste);
    let area = parseFloat(_area);
    let resultado = coste * area;
    if (!isNaN(resultado)){
        return resultado;
    } else {
        return 0;
    }
}


// muestra una alerta con el texto indicado
function nuevaAlerta(tipo, mensaje) {
    alert(mensaje);
}

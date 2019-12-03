document.addEventListener("DOMContentLoaded", () => {
    // El elemento que tendrá el autocompletado
    const $inputNombre = document.querySelector("#nombre");



    let ac = new Awesomplete($inputNombre, {
        list: [], // Por defecto es una lista vacía, hasta que se comienza a escribir
        minChars: 1, // Cuántos caracteres escribir para autocompletar
    });

    // Esta función filtra los datos y refresca el autocompletado
    const refrescarLista = () => {
        let valorDelInput = $inputNombre.value;
        if (!valorDelInput) return; // Detener si no hay valor

        // Buscar nombres de la base de datos con PHP
        fetch("./nombres.php?busqueda=" + valorDelInput)
            .then(r => r.json())
            .then(mascotas => {
                // Mapeamos, ya que se requiere label y value
                ac.list = mascotas.map(mascota => ({
                    label: mascota.nombre, // Lo que aparece al buscar
                    value: mascota.id, // El valor que se pone en el input
                }));
            });
    };

    // Agregar un listener para cuando se cambie el contenido; en el mismo se refresca la lista
    $inputNombre.addEventListener("input", () => {
        refrescarLista();
    });

    $inputNombre.addEventListener("awesomplete-selectcomplete", function() {
        console.log("Se ha seleccionado un elemento de la lista");
    });

});
function getCharactersData() {
        // Traigo el valor ingresado en el campo de entrada
    const characterName = document.getElementById('characterName').value;
        // Defino la constante para la URL de la API con el nombre del personaje como parámetro de búsqueda
    const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`;
    // Realizo la solicitud a la API utilizando fetch
    fetch(url)
        .then(response => response.json())
        .then(data => {
                // Verifico si hay resultados de personajes
            if (data.results.length > 0) {
                // Tomo el primer resultado del array
                const character = data.results[0]; 
                // Creo los elementos en HTML con la información del personaje
                const charactersData = `
                    <p><strong>Nombre:</strong> ${character.name}</p>
                    <p><strong>Estado:</strong> ${character.status}</p>
                    <p><strong>Especie:</strong> ${character.species}</p>
                    <p><strong>Origen:</strong> ${character.origin.name}</p>
                    <p><strong>Ubicación:</strong> ${character.location.name}</p>
                    <img src="${character.image}" alt="${character.name}">
                `;
                // Muestro los datos del personaje en el elemento con id 'charactersData'
                document.getElementById('charactersData').innerHTML = charactersData;
            }
        })
        .catch(error => {
            // En caso de error agrego parrafo de informe + error en consola
            console.error('Error al obtener los datos:', error);
            document.getElementById('charactersData').innerHTML = '<p>No se encontraron resultados.</p>';
        });
}
function clearSearch() {
    // Borra los resultados de búsqueda previos y el campo de entrada
    document.getElementById('characterName').value = '';
    document.getElementById('charactersData').innerHTML = '';
}
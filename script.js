function getCharactersData() {
    const characterName = document.getElementById('characterName').value;
    const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            if (data.results.length > 0) {
                const character = data.results[0]; 

                const charactersData = `
                    <p><strong>Nombre:</strong> ${character.name}</p>
                    <p><strong>Estado:</strong> ${character.status}</p>
                    <p><strong>Especie:</strong> ${character.species}</p>
                    <p><strong>Origen:</strong> ${character.origin.name}</p>
                    <p><strong>Ubicación:</strong> ${character.location.name}</p>
                    <img src="${character.image}" alt="${character.name}">
                `;

                document.getElementById('charactersData').innerHTML = charactersData;
            }
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
            document.getElementById('charactersData').innerHTML = '<p>No se encontraron resultados.</p>';
        });
}
function clearSearch() {
    
    document.getElementById('characterName').value = '';
    document.getElementById('charactersData').innerHTML = '';
}
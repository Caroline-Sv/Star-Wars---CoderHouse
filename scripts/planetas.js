async function fetchAllPlanets() {
    try {
        let allPlanets = [];

        let nextPage = 'https://swapi.dev/api/planets/';

        while (nextPage) {
            const response = await fetch(nextPage);
            const data = await response.json();

            allPlanets = allPlanets.concat(data.results);

            nextPage = data.next;
        }

        displayPlanets(allPlanets);
    } catch (error) {
        console.log("Erro ao buscar dados dos planetas:", error);
    }
}

function displayPlanets(planets) {
    const planetsContainer = document.getElementById("planets-container");

    planets.forEach(planet => {
        const planetCard = document.createElement("div");
        planetCard.classList.add("planet-card");

        planetCard.innerHTML = `
            <img src="img/img-planetas/Planet.png" width="200px" alt="${planet.name}">
            <div class="planet-info">
                <h3>Name: ${planet.name}</h3>
                <p>Diameter: ${planet.diameter}km</p>
                <p>Population: ${planet.population}</p>
                <p>Climate: ${planet.climate}</p>
                <p>Terrain: ${planet.terrain}</p>
            </div>
        `;

        planetsContainer.appendChild(planetCard);
    });
}

window.onload = fetchAllPlanets;

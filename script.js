document.querySelector('#pokeBtn').addEventListener('click', searchPoke)

function lowerCase(string) {
  return string.toLowerCase();
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function searchPoke (p) {
  const name = document.querySelector("#pokeSearch").value;
  const pokeName = lowerCase(name);

  fetch (`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  .then((response) => response.json())
  .then((data)=> {
    document.querySelector('.pokeWrapper').innerHTML = 
    `<div class="pokeInfo">
      <img src="${data.sprites.other['dream_world'].front_default}" alt="">
    <div class="pokeStats">
      <h1>${capitalize(data.name)}</h1>
      <p>Weight: ${data.weight}</p>
      <p>Abilities: ${capitalize(data.abilities[0].ability.name)}; ${capitalize(data.abilities[1].ability.name)}</p>
      <p>Type: ${capitalize(data.types[0].type.name)}</p>
    </div>
    </div>`
    console.log(data)
  })
  .catch((err) => {
    if (err) {
    console.log("Pokemon not found", err);
    }
  });

  p.preventDefault();
}

searchPoke();
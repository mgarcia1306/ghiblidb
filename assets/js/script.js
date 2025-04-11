const movieContainer = document.getElementById('movieContainer');

fetch('https://studio-ghibli-films-api.herokuapp.com/api/pom%20poko')
  .then(response => response.json())
  .then(data => {
    const info = document.createElement('div');
    info.classList.add('row', 'border-secondary', 'mb-5', 'ml-5', 'mr-5');
    info.innerHTML = `
    <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4 pt-5 border border-light-subtle bg-danger bg-gradient shadow">
        <div class="row"><h1>${data.title}</h1></div>       
        <div class="row"><p id="title" class="text-light"><i>${data.hepburn}</i></p></div>
        <div class="row border border-light-subtle bg-white"><div class="col-md-12 mt-3 mb-3"><img src="${data.poster}" class="border border-dark"></img></div></div>
      </div>
      <div class="col-md-4 pt-5 border border-light-subtle bg-light-subtle shadow">
        <div class="row pt-4 pb-3"><div class="col-md-12"><strong>Año de estreno:</strong></div></div>
        <div class="row pb-2"><div class="col-md-12 border-bottom border-light-subtle">${data.release}</div></div>
        <div class="row pt-4 pb-3"><div class="col-md-12"><strong>Director:</strong></div></div>
        <div class="row pb-2"><div class="col-md-12 border-bottom border-light-subtle">${data.director}</div></div>
        <div class="row pt-4 pb-3"><div class="col-md-12 pl-2 pr-2"><strong>Sinopsis:</strong></div></div>
        <div class="row pb-2"><div class="col-md-12 ml-5 mr-5 mb-2 text-wrap">${data.synopsis}</div></div>
        <div class="row pb-2"><div class="col-md-12 ml-5 mr-5"><a href="https://es.wikipedia.org/wiki/Pompoko" target="_blank"><button id="button" type="button" class="button bg-danger bg-gradient border-light">Más info</button></a></div></div>
      </div>
    </div>
    </div>    
    `
    movieContainer.appendChild(info);
  });
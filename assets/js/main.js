//const per far richiamare APi molto piu semplicemente
const api = "https://lanciweb.github.io/demo/api/pictures/";

//const per richiamare l'elemento container dall'html per poi inserirci le altre card
const container = document.getElementById("photo-container");

//chiamata API con fetch
fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(data.length);
        // svuoto il contenitore prima di inserire le card
        container.innerHTML = "";
        // ciclo tutte le foto
        data.forEach(photo => {
            const col = document.createElement("div");
            col.className = "col-12 col-sm-6 col-lg-4";
            col.innerHTML = `
    <div class="card shadow position-relative">
      <div class="puntina"></div>
      <img src="${photo.url}" class="w-100" alt="${photo.title}">
      <div class="text-center" style="font-family: 'Sometype Mono', monospace;">
        <p class="text-dark mb-1">${photo.date}</p>
        <p class="card-text fst-italic fw-bold fs-5">${photo.title}</p>
      </div>
    </div>`
            container.appendChild(col);
        });
    })
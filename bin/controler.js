/**
 * <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
 */
import { getAllSongs } from "./singer-operation.js";
const songsbody = document.querySelector("#songs");
const searchvalue = document.querySelector("#search");
const btn = document.querySelector("#btn");
let singerName;
btn?.addEventListener("click", () => {
    songsbody.innerHTML = "";
    singerName = searchvalue.value;
    console.log(singerName);
    printAllSongs(singerName);
    //  searchvalue.value = "";
    console.log("end");
});
async function printAllSongs(singerName) {
    const singers = await getAllSongs(singerName);
    singers.forEach((singer) => {
        prepare(singer);
    });
}
function prepare(singer) {
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "20rem";
    const image = document.createElement("img");
    image.src = singer.photo;
    image.className = "card-img-top";
    card.appendChild(image);
    const cardbody = document.createElement("div");
    cardbody.className = "card-body";
    const heading = document.createElement("h5");
    heading.className = "card-title";
    heading.innerText = singer.name;
    cardbody.appendChild(heading);
    const p = document.createElement("p");
    p.className = "card-text";
    p.innerText = singer.title;
    cardbody.appendChild(p);
    const audio = document.createElement("audio");
    audio.src = singer.audio;
    audio.controls = true;
    cardbody.appendChild(audio);
    card.appendChild(cardbody);
    songsbody?.appendChild(card);
}

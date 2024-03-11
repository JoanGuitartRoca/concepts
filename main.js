/* import axios from "axios"; */
//const axios = require('axios');

window.onload = function () {
    let sec = document.getElementById('thumbnails');
    const url = 'https://jsonplaceholder.typicode.com/photos';
    cards();

    async function cards() {
        const response = await axios.get(url);

        console.log(response.data);

        for (let i = 0; i <= 20; i++) {
            const { title, thumbnailUrl } = response.data[i];
            let card = document.createElement('div');
            card.classList.add('card');
            card.style.width = '18rem';
            sec.appendChild(card);

            let img = document.createElement('img');
            img.src = thumbnailUrl;
            img.classList.add("card-img-top");
            card.appendChild(img);

            let cardb = document.createElement('div');
            cardb.classList.add("card-body");
            card.appendChild(cardb);

            let p = document.createElement('p');
            p.classList.add("card-text");
            p.innerHTML = title;
            cardb.appendChild(p);
        }
    }
}

/* const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json=await response.json(); */
/* import axios from "axios"; */
//const axios = require('axios');

window.onload = function () {
    let but = document.getElementById('but');
    const url='https://jsonplaceholder.typicode.com/users/1';

    but.addEventListener('click', async () => {
        /* const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json=await response.json(); */
        const response = await axios.get(url);

        console.log(response.data);

        const { title, id, userId, company } = response.data;

        let p = document.createElement("b")
        let par = document.createElement("block").appendChild(p);
        document.body.appendChild(par);
        p.innerHTML = company.name;
    });


}


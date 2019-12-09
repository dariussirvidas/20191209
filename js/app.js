(function () {

"use strict";

    var images = [
        "https://t3.ftcdn.net/jpg/01/25/46/34/240_F_125463469_BKIfSBqM9MM7T4PYzUk61zbeM0Uf8KwA.jpg",
        "https://t4.ftcdn.net/jpg/01/93/21/03/240_F_193210330_hBFxw0qkTDFTsqwnPVWw8xLuImrvFi9n.jpg",
        "https://t4.ftcdn.net/jpg/01/45/28/41/240_F_145284145_BC57vx0sNy9juCXzfHqDpMqYq6MUPCPQ.jpg",
        "https://t4.ftcdn.net/jpg/00/81/21/47/240_F_81214721_xOiCCpEmKNPoLSPXo3UwLP7i8HPiLM78.jpg",
        "https://t4.ftcdn.net/jpg/01/80/70/59/240_F_180705946_8bbxWnPUDUuLI2uHqEPqJTD7BHx2BB19.jpg",
        "https://t3.ftcdn.net/jpg/01/26/06/70/240_F_126067012_VDHo0DXpzyUgJLXP5BHzmUvQCgM52q3O.jpg",
        "https://t3.ftcdn.net/jpg/02/46/81/14/240_F_246811446_iwTs5N49KbtB6jmLcdSeC12X1b1NGh9p.jpg",
        "https://t4.ftcdn.net/jpg/02/01/95/31/240_F_201953179_LxKXBQSL9wd6L4mKdjKrLl8wx1WlhLtt.jpg",
        "https://t4.ftcdn.net/jpg/00/99/09/53/240_F_99095345_D355ceiLff0ZwJnWMaDTUwB1zs2Fej1i.jpg",
        "https://t4.ftcdn.net/jpg/01/39/20/51/240_F_139205108_XAQcMphYUksGE73JVMcEgRHNwA3BBCVZ.jpg"
    ];

const section = document.querySelector("section:first-child");
const galeryDiv = document.querySelector(".galery");
const tasks = document.querySelector("ul");
const galery = document.querySelector(".galery>ul");
const task = document.querySelector(".darbas");
const rows = document.querySelector(".rows");
const columns = document.querySelector(".columns");
const addTask = document.querySelector(".pridekDarba");
const removeTask = document.querySelector(".removeLastItem");
const createTable = document.querySelector(".createTable");
const create = document.querySelector(".create");
const mix = document.querySelector(".mix");

addTask.addEventListener("click", addNewTask);
removeTask.addEventListener("click", removeLastTask);
createTable.addEventListener("click", createNewTable);
create.addEventListener("click", createGalery);
mix.addEventListener("click", mixImg);


function addNewTask() {
    let li = document.createElement("li");
    li.textContent = task.value;
    tasks.appendChild(li);
}

function removeLastTask() {
    let lastTask = document.querySelector("li:last-child");
    tasks.removeChild(lastTask);
}

function createNewTable() {
    var table = document.createElement("table");
    section.appendChild(table);
    for (let i = 0; i < rows.value; i++ ) {
        var row = document.createElement("tr");
        table.appendChild(row);
        for (let i = 0; i < columns.value; i++) {
            let cell = document.createElement("td");
            cell.textContent = "...";
            row.appendChild(cell);
        }
    }
}

function createGalery() {

    for (let i = 0; i < images.length; i++) {
        let li = document.createElement("li");
        galery.appendChild(li);
        let img = document.createElement("img");
        img.src = images[i];
        li.appendChild(img);
    }
    galeryDiv.removeChild(create);
}

function mixImg() {
    var list = document.querySelectorAll(".galery li");
    for(let item of list) {
        item.style.order = Math.floor((Math.random()*10));
    }
}

})();
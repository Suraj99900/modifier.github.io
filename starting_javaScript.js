
let img_box_1 = document.getElementById("img_box_1");
let img_box_2 = document.getElementById("img_box_2");
let img_box_3 = document.getElementById("img_box_3");
let title_box = document.getElementById("title_box");
let score_value = document.getElementById("score_value");

// images vairiable 

let mario = "mario.gif"
let military = "military.gif"
let dora = "dora.png"


let title_name = document.createElement("h1");
let show_starting = document.createElement("h4");

const node_starting = document.createTextNode("WAIT... Game Is Starting...");
show_starting.appendChild(node_starting);

function check_click1() {
    console.log("1");

    const node_name = document.createTextNode("You select the -- mario --");
    title_name.appendChild(node_name);
    let show_box = document.createElement("div");
    show_box.setAttribute("class", "show_box");
    show_box.appendChild(title_name);
    show_box.appendChild(show_starting);
    title_box.appendChild(show_box);

    // game start function
    function start() {
        window.location.href = 'http://127.0.0.1:5500/start_game.html?' + mario;
    }

    setTimeout(() => {
        start()
    }, 2500);
}

function check_click2() {
    console.log("2");
    const node_name = document.createTextNode("You select the -- military man --");
    title_name.appendChild(node_name);
    let show_box = document.createElement("div");
    show_box.setAttribute("class", "show_box");
    show_box.appendChild(title_name);
    show_box.appendChild(show_starting);
    title_box.appendChild(show_box);

    // game start function
    function start() {
        window.location.href = 'http://127.0.0.1:5500/start_game.html?' + military;
    }

    setTimeout(() => {
        start()
    }, 2500);
}

function check_click3() {
    console.log("3");
    const node_name = document.createTextNode("You select the -- Dora --");
    title_name.appendChild(node_name);
    let show_box = document.createElement("div");
    show_box.setAttribute("class", "show_box");
    show_box.appendChild(title_name);
    show_box.appendChild(show_starting);
    title_box.appendChild(show_box);

    // game start function
    function start() {
        window.location.href = 'http://127.0.0.1:5500/start_game.html?' + dora;
    }

    setTimeout(() => {
        start()
    }, 2500);
}

function score() {
    let session_data = sessionStorage.getItem("score");
    score_value.innerText = "High Score :" + session_data;
}

score();
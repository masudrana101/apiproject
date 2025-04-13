const display = document.getElementById("display");

function getData(){
    fetch("http://127.0.0.1:5500/fetch/data.txt")
    .then((res) => res.text())
    .then((data) => {
        console.log("hello 2");

        display.innerText = data;
    });

    console.log("hello");



}
function rysuj(id){
    if(document.getElementById(id).textContent != "O" && document.getElementById(id).textContent != "X"){
    document.getElementById(id).textContent = "X";
    let pole = parseInt(Math.random() * 9);
    while(!(document.getElementById("p"+pole).textContent != "O" && document.getElementById("p"+pole).textContent != "X")){
        pole = parseInt(Math.random() * 9);
    }
    document.getElementById("p"+pole).textContent = "O"

    }
}
let ligar = document.querySelector("#turnOn")
let desligar = document.querySelector("#turnOff")
let lampada = document.querySelector("#lamp")
let h1 = document.querySelector("h1")

ligar.addEventListener("click",function(){

    lampada.src="./ligada.jpg";
    h1.style.color = "yellow"
    h1.innerHTML = "Ligada"
    
})



desligar.addEventListener("click",function(){

    lampada.src="./desligada.jpg";
    h1.style.color = "white"
    h1.innerHTML = "Desligada"
    
})

lampada.addEventListener("click",function(){

    lampada.src="./quebrada.jpg";
    h1.style.color = "white"
    h1.innerHTML = "Quebrada"
    
})
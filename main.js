function muda_cor_hex(){
    let body = document.getElementById("bg");
    const hex = "0123456789ABCDEF";
    let cor = "#";

    for(let i=0; i<6; i++){
        cor += hex.charAt(Math.floor(Math.random() * hex.length))

    }
    body.style.background = cor;
}
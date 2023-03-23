
let cel = document.getElementById("cel");
cel.addEventListener("input", function () {
    // let c = this.value;
    // let fahren = (c * 9/5) + 32;
    let fahren= (this.value * 9/5) + 32;
    if(Number.isInteger(fahren)){
        fahren = fahren.toFixed(3);
    }
    fah.value = fahren;            
});
let fah = document.getElementById("fah");
fah.addEventListener("input", function (){
    // let f = this.value;
    // let celsi = (f − 32) × 5/9;
    let celsi = (this.value-32)*5/9;
    if(Number.isInteger(celsi)){
        celsi = celsi.toFixed(3);
    }
    cel.value = celsi;
    
});


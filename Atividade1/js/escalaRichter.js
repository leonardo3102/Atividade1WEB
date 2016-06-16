function calcular(){
    intervalo = document.calculoTerremoto.intervalo.value;
    amplitude = document.calculoTerremoto.amplitude.value;
    m = Math.log10(amplitude) + ((3*(Math.log10(intervalo))) - 2.92);
    document.getElementById("resultado").innerHTML = m;
}

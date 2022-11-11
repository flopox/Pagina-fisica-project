const section_fr = document.querySelector("section-fr")
const input_cal = document.getElementById("input-cal")

const calculo = () =>{     

    const input_acel = +(document.getElementById("input-acel")).value 
    const input_tiempo = +(document.getElementById("input-tiempo")).value 
    const input_velinic = +(document.getElementById("input-velinic")).value 
    const input_velfin = +(document.getElementById("input-velfin")).value 


    let vel_fin = (input_acel * input_tiempo) + input_velinic
    let vel_inic =  input_velfin - input_acel * input_tiempo
    let calc_tiempo = (input_velfin - input_velinic)/ input_acel
    let calc_acel = (input_velfin - input_velinic)/ input_tiempo
    let dis_etapa = input_velinic * input_tiempo + 0.5 * input_acel * (input_tiempo **2)

    if(input_tiempo > 0 & input_acel > 0){ 
        let resNAc = 'La distancia recorrida es de ' + dis_etapa + ' Mts. \n La velocidad alcanzada fue de ' + calc_acel + ' Mts/S. \n El tiempo transcurrido fue de ' + calc_tiempo + 'Segundos'
        respuesta(resNAc)
        console.log(resNAc)
    } else {}
}
const respuesta = (res) => {
    clearRespuesta();
    let contenedor_res = document.querySelector(".contenedor-res") 
    let respuestaDiv = document.createElement("div");
    respuestaDiv.innerHTML = `<h4>Respuesta</h4>
    <p>${res}</p>`;
contenedor_res.appendChild(respuestaDiv); 
}

const clearRespuesta = () =>{ 
    const respuesta = document.querySelector("#idRespuesta");
    while (respuesta.firstChild) {
        respuesta.removeChild(respuesta.firstChild);
    }
}

const show = (input) =>{ 
    input.style.display = "flex"
}

const dontShow = (input) =>{
    input.style.display = "none"
}

input_cal.addEventListener("click", (e) =>{ 
    e.preventDefault();
    calculo();
})
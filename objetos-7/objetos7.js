let sistemaSolar = {

    mercurio: {
        nombre: 'mercurio',
        color: 'gris',
        temperatura: 350,
        imagen: 'https://www.astromia.com/fotosolar/fotos/planetamercurio.jpg'

    },
    venus: {
        nombre: 'venus',
        color: 'blanco',
        temperatura: 460,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg'

    },
    tierra: {
        nombre: 'tierra',
        color: 'morado',
        temperatura: 14,
        imagen: 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg'
    },
    marte: {
        nombre: 'marte',
        color: 'rojo',
        temperatura: -46,
        imagen: 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg'
    },
    jupiter: {
        nombre: 'jupiter',
        color: 'marrón',
        temperatura: -121,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg'
    },
    saturno: {
        nombre: 'saturno',
        color: 'amarillo',
        temperatura: -130,
        imagen: 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg'
    },
    urano: {
        nombre: 'urano',
        color: 'azul',
        temperatura: -205,
        imagen: 'http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg'
    },
    neptuno: {
        nombre: 'neptuno',
        color: 'azul',
        temperatura: -220,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg'
    },
    pluton: {
        nombre: 'plutón',
        color: 'blanco',
        temperatura: -229,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/1200px-Nh-pluto-in-true-color_2x_JPEG.jpg'
    }

};


let planeta1 = window.prompt("Escribe el nombre de un planeta");
let planeta2 = window.prompt("Escribe el nombre de otro planeta");
let planeta3 = window.prompt("Escribe el nombre de un último planeta");


let mensaje="";





if (planeta1 !== planeta2 && planeta1 !== planeta3 && planeta2 !== planeta3) {

    if (planeta1 === "mercurio" || planeta1 === "venus" || planeta1 === "tierra" || planeta1 === "marte" || planeta1 === "jupiter" || planeta1 === "saturno" || planeta1 === "neptuno" || planeta1 === "urano" || planeta1 === "pluton"
        &&
        planeta2 === "mercurio" || planeta2 === "venus" || planeta2 === "tierra" || planeta2 === "marte" || planeta2 === "jupiter" || planeta2 === "saturno" || planeta2 === "neptuno" || planeta2 === "urano" || planeta2 === "pluton"
        &&
        planeta3 === "mercurio" || planeta3 === "venus" || planeta3 === "tierra" || planeta3 === "marte" || planeta3 === "jupiter" || planeta3 === "saturno" || planeta3 === "neptuno" || planeta3 === "urano" || planeta3 === "pluton"

    ) 
    {

        let mostrarPlanetas = `

    <div class="planetas-container">

        <div class="card">
     
            <h1><b>${planeta1}</b></h1>
        
            <img src="${sistemaSolar.planeta1.imagen}" alt="planeta1" style="width:100%">
            <div class="container">
                <p>${sistemaSolar.planeta1.color}</p>
                <p>${sistemaSolar.planeta1.temperatura}</p>
            </div>
        </div>

        <div class="card">
     
                <h1><b>${planeta2}</b></h1>
    
                <img src="${sistemaSolar.planeta2.imagen}" alt="planeta1" style="width:100%">
                <div class="container">
                    <p>${sistemaSolar.planeta2.color}</p>
                    <p>${sistemaSolar.planeta2.temperatura}</p>
                </div>
        </div>


        <div class="card">
     
            <h1><b>${planeta3}</b></h1>
    
            <img src="${sistemaSolar.planeta3.imagen}" alt="planeta1" style="width:100%">
            <div class="container">
                <p>${sistemaSolar.planeta3.color}</p>
                 <p>${sistemaSolar.planeta3.temperatura}</p>
            </div>
        </div>



    </div> `

    document.getElementById("div1").innerHTML=mostrarPlanetas;

    }else{
        document.getElementById("div1").innerHTML=`El nombre introducido no coincido con el de ningún planeta`;

    }


} else{
    document.getElementById("div1").innerHTML=`El nombre introducido no coincido con el de ningún planeta`;
    
}

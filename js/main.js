// Funcion para calcular la inflacion mensual
function calcularinflacion {
    const inflacionmensual = inflacionanual / (7 * 12)

    const dinerofinal = (dinerofinal * inflacionanual) / (1 - math.pow(1 + inflacionanual, -montofinal));

    return dinerofinal.tofixed(2)
}

/// pedir datos al usuario
const inflacionmensual = parseInt(prompt("Ingrese la inflacion mensual de tu pais"))
const dinerofinal = parseInt(prompt("Ingrese el dinero que posee actualmente"))

if (isNaN(inflacionmensual)) || isNaN(dinerofinal) || isNaN(inflacionanual){
    console.log("Porfavor, ingrese valores numericos validos")
}


//Calcular inflacion anual usando funcion
const dinerofinal = calcularinflacion(dinerofinal, inflacionmensual){
} else 

//mostrar resultados
console.log(`Su dinero es: ${dinerofinal}`)

console.log{`Tasa de inflacion anual: ${inflacionmensual}`}

//mostrar resultados
alert(`Dinero Final: $${dinerofinal} \ Inflacion anual:${inflacionmensual}`)
calcularinflacion();
// Funcion para calcular la inflacion mensual
function calcularinflacion(dinero, inflacionanual) {
    const inflacionmensual = inflacionanual / (7 * 12);
    const dinerofinal = (dinero * inflacionanual) / (1 - Math.pow(1 + inflacionanual, -7 * 12));
    return dinerofinal.toFixed(2);
}
calcularinflacion();
/// pedir datos al usuario
const inflacionanual = parseFloat(prompt("Ingrese la inflacion anual de tu país en decimal (por ejemplo, 0.05 para 5%)"));
const dineroinicial = parseFloat(prompt("Ingrese el dinero que posee actualmente"));

if (isNaN(inflacionanual) || isNaN(dineroinicial)) {
    console.log("Por favor, ingrese valores numéricos válidos.");
} else {
    // Calcular inflacion mensual y dinero final usando la función
    const dinerofinal = calcularinflacion(dineroinicial, inflacionanual);

//Calcular inflacion anual usando funcion
const dinerofinal = calcularinflacion(dinerofinal, inflacionmensual){
} else 

//mostrar resultados
console.log(`Su dinero es: $${dineroinicial}`);
console.log(`Tasa de inflación anual: ${inflacionanual * 100}%`);
console.log(`Dinero Final: $${dinerofinal}`);
}
alert(`Dinero Final: $${dinerofinal} \ Inflacion anual:${inflacionmensual}`)

var mascotasJson = [{
    "nombre": "fluffy",
    "mascota": "true",
    "animal": "gato",
    "edadHumana": "7"
},
{
    "nombre": "Balto",
    "mascota": "true",
    "animal": "perro",
    "edadHumana": "11"
},
{
    "nombre": "Mandibulas",
    "mascota": "false",
    "animal": "tiburon",
    "edadHumana": "50"
}]

var nuevogato = [{
    "nombre":"Copito",
    "mascota":"true",
    "animal":"gato",
    "edadHumana":"50",
}]
var nuevoperro = [
{
    "nombre":"tigre",
    "mascota":"false",
    "animal":"perro",
    "edadHumana":"1",
}
]

console.log("Cantidad de mascostas: " + mascotasJson.length)

mascotasJson.push(nuevogato, nuevoperro)

console.log("Cantidad de mascotas final: " + mascotasJson.length)
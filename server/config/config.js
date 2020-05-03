//PROCESS es un objeto global que siempre esta corriendo a lo largo de la aplicacion de node y tambien es actualizado dependiendo del environment donde esta corriendo

process.env.PORT = process.env.PORT || 3000;

/////////////////////////////////////////
///ENTORNO
//////////////////////////////
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

////////////////////////////////////////
//Base de DAtos
////////////////////////////
let urlDB;

if (process.env.NODE_ENV === "dev") {
    urlDB = "mongodb://localhost:27017/cafe";
} else {
    urlDB =
        "mongodb+srv://shadow:yCrqVBBcwNy3oh9e@cluster0-vweeg.mongodb.net/cafes";
}
process.env.URLDB = urlDB;
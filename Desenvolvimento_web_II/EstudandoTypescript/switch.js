"use strict";
let perfil = "fdfsfdsnode";
switch (perfil) {
    case "superuser":
        console.log("Super-Usuario");
        break;
    case "manager":
        console.log("Manager");
        break;
    case "admin":
        console.log("Administrador");
        break;
    case "user":
        console.log("Usuario comum");
        break;
    default:
        console.log("Sem perfil");
        break;
}

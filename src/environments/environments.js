import { configuraciones } from "../AppConfig";
let server = configuraciones.server;

export const environment = {
    production:false,
    // API
    api:server,

    // SERVICIOS
    login:'login',
}
import { configuraciones } from "../AppConfig";
let server = configuraciones.server;

export const environment = {
    production:false,
    // API
    api:server,

    // SERVICIOS USER
    create_user:'create/',
    login:'login/',
    get_user_details:'userdetails/',
    change_password:'change-password/',


    // ORDERS

    create_order:'orders/create/',
    update_order:'orders/', // 2/update/
    delete_order:'orders/', // 2/delete/
    get_orders:'orders/',


    // BOARDS

    create_board:'states/', // POST
    update_board:'states/', // 2/update/
    delete_board:'states/', // 2/delete/
    get_boards:'states/',

    

    
}
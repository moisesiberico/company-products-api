//------------------------------------
//
// Conexion con la base de datos del 
// la aplicación.
// 
//------------------------------------
/*
const dbname = 'yavoydb';
const dblogin = 'yavoyadmin';
const dbpassword = 'D010K05g@by';
const dbhost = 'db4free.net';
const dbdialect = 'mysql';

const dbname = 'mysql';
const dblogin = 'root';
const dbpassword = 'root';
const dbhost = '127.0.0.1';
const dbdialect = 'mysql';
*/

module.exports = {
    port: process.env.PORT || 3051,
    dbname      : process.env.DB_DATABASE,
    dblogin     : process.env.DB_USERNAME,
    dbpassword  : process.env.DB_PASSWORD,
    dbhost      : process.env.DB_HOST,
    dbdialect   : process.env.DB_CONNECTION,
    SECRET_TOKEN: process.env.SECRET_TOKEN
}
  
import app from "./app";
// Importar base de datos MongoDB
import './database/mongodb/db_mongodb';
// Importar base de datos MySQL


app.listen(app.get("port"));

console.log("Server on port", app.get('port'));

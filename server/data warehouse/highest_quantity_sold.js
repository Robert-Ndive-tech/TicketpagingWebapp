const mysql = require('./mysql') 
const schema = {
    table: 'highest_sale',
    fields: [
       { name: 'Product_name', type: 'varchar(255)' },
       { name: 'quantity_sold', type: 'int' },
       { name: 'location_sold', type: 'varchar(255)' },
    ],
   }
  
   const databasewarehouse = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "BikeStores",
  });
  
const createTableQuery = `CREATE TABLE IF NOT EXISTS ${table} (${fields
 .map(field => `${field.name} ${field.type}`)
 .join(', ')})`;

 databasewarehouse.query(createTableQuery, (err, result) => {
 if (err) throw err;
 console.log('Table created...');
});
  


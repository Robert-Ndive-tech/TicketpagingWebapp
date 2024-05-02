const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const multer = require("multer");
var fs = require("fs");
const cors = require("cors");

const router = express.Router();
const brandrouter = express.Router();
const categrouter = express.Router();
const itemorderRouter = express.Router();
const ordersrouter = express.Router();
const productrouter = express.Router();
const storesrouter = express.Router();
const stocksrouter = express.Router();
const customrouter = express.Router();
const staffrouter = express.Router();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DEFINING DATABASE

const Productiondb = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "production",
});
const Salesdb = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "sales",
});
const pool = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "Imagestore",
});




















/*
const Online = mysql.createConnection({
  host: "bepmjmvyyqzpkqn09gkw-mysql.services.clever-cloud.com",
  user: "u5yizoklwtbdszg8",
  password: "464LMhsXrxuJ5GY110gw",
  database: "bepmjmvyyqzpkqn09gkw",
});
*/
//USING THE DIFERENENT ROUTES
/*

Salesdb.connect((err) => {
  if (err) {
    console.log("Not connected to db 2");
    throw err;
  }
  console.log("MySQL Connected.to db 2..");
});
/*
Online.connect((err) => {
  if (err) {
    console.log("Not connected to db 4");
    throw err;
  }
  console.log("MySQL Connected.to db 4..");
});*/
pool.connect((err) => {
  if (err) {
    console.log("Not connected to db 3");
    throw err;
  }
  console.log("MySQL Connected.to db 3..");
});

Productiondb.connect((err) => {
  if (err) {
    console.log("Not connected");
    throw err;
  }
  console.log("MySQL Connected.to db 1..");
});

app.listen(4500, () => {
  console.log("Server started on port 4500");
});

//DEFININ THE CONTROLLERS AND ROUTES ININ THE CONTROLLERS AND ROUTES

brandrouter.get("/hi", function (req, res, next) {
  console.log("Router Working");
  res.json("hello world");
  res.end();
});
brandrouter.get("/display", (req, res) => {
  let sql = "SELECT * FROM brands ";
  let query = Productiondb.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});
brandrouter.get("/display/:brand_name", (req, res) => {
  let sql = "SELECT * FROM brands WHERE brand_name = ?";
  let query = Productiondb.query(
    sql,
    [req.params.brand_name],
    (err, results) => {
      if (err) throw err;
      console.log(results);
      res.send(results);
    }
  );
});

brandrouter.post("/insert", (req, res) => {
  let sql = "INSERT INTO brands SET ?";
  let post = req.body;
  let query = Productiondb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

brandrouter.put("/select/:brand_name", (req, res) => {
  let sql = "UPDATE brands SET ? WHERE brand_name = ?" + req.params.id;
  let post = req.body;
  let query = Productiondb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Updated...");
  });
});

brandrouter.delete("/delete/:customer_id", (req, res) => {
  let sql = "DELETE FROM brands WHERE customer_id = " + req.params.id;
  let query = Productiondb.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Deleted...");
  });
});

categrouter.get("/display", (req, res) => {
  let sql = "SELECT * FROM categories";
  let query = Productiondb.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

categrouter.post("/insert", (req, res) => {
  let sql = "INSERT INTO categories SET ?";
  let post = req.body;
  let query = Productiondb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

categrouter.put("/select/:id", (req, res) => {
  let sql = "UPDATE categories SET ? WHERE id = " + req.params.id;
  let post = req.body;
  let query = Productiondb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Updated...");
  });
});

categrouter.delete("/delete/:id", (req, res) => {
  let sql = "DELETE FROM categories WHERE id = " + req.params.id;
  let query = Productiondb.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Deleted...");
  });
});

productrouter.get("/display", (req, res) => {
  let sql = "SELECT * FROM products";
  let query = Productiondb.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

productrouter.post("/insert", (req, res) => {
  let sql = "INSERT INTO products SET ?";
  let post = req.body;
  let query = Productiondb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

productrouter.put("/select/:id", (req, res) => {
  let sql = "UPDATE products SET ? WHERE id = " + req.params.id;
  let post = req.body;
  let query = Productiondb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Updated...");
  });
});

productrouter.delete("/delete/:id", (req, res) => {
  let sql = "DELETE FROM products WHERE id = " + req.params.id;
  let query = Productiondb.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Deleted...");
  });
});

stocksrouter.get("/display", (req, res) => {
  let sql = "SELECT * FROM stocks";
  let query = Productiondb.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

stocksrouter.post("/insert", (req, res) => {
  let sql = "INSERT INTO stocks SET ?";
  let post = req.body;
  let query = Productiondb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

stocksrouter.put("/select/:id", (req, res) => {
  let sql = "UPDATE stocks SET ? WHERE id = " + req.params.id;
  let post = req.body;
  let query = Productiondb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Updated...");
  });
});

stocksrouter.delete("/delete/:id", (req, res) => {
  let sql = "DELETE FROM stocks WHERE id = " + req.params.id;
  let query = Productiondb.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Deleted...");
  });
});

//SALESDB TABLES ROUTERS

staffrouter.get("/display", (req, res) => {
  let sql = "SELECT * FROM staffs";
  let query = Salesdb.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

staffrouter.post("/insert", (req, res) => {
  let sql = "INSERT INTO staffs SET ?";
  let post = req.body;
  let query = Salesdb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

staffrouter.put("/select/:id", (req, res) => {
  let sql = "UPDATE staffs SET ? WHERE id = " + req.params.id;
  let post = req.body;
  let query = Salesdb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Updated...");
  });
});

staffrouter.delete("/delete/:id", (req, res) => {
  let sql = "DELETE FROM staffs WHERE id = " + req.params.id;
  let query = Salesdb.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Deleted...");
  });
});

customrouter.get("/display/:last_name", (req, res) => {
  let sql = "SELECT * FROM customers WHERE last_name = ?";
  let query = Salesdb.query(sql, [req.params.last_name], (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

customrouter.get("/display", (req, res) => {
  let sql = "SELECT * FROM customers";
  let query = Salesdb.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

customrouter.post("/insert", (req, res) => {
  let sql = "INSERT INTO customers SET ?";
  let post = req.body;
  let query = Salesdb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

customrouter.put("/select/:id", (req, res) => {
  let sql = "UPDATE customers SET ? WHERE id = " + req.params.id;
  let post = req.body;
  let query = Salesdb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Updated...");
  });
});

customrouter.delete("/delete/:id", (req, res) => {
  let sql = "DELETE FROM customers WHERE id = " + req.params.id;
  let query = Salesdb.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Deleted...");
  });
});

itemorderRouter.get("/display", (req, res) => {
  let sql = "SELECT * FROM orders_items";
  let query = Salesdb.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

itemorderRouter.post("/insert", (req, res) => {
  let sql = "INSERT INTO orders_items SET ?";
  let post = req.body;
  let query = Salesdb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

itemorderRouter.put("/select/:id", (req, res) => {
  let sql = "UPDATE orders_items SET ? WHERE id = " + req.params.id;
  let post = req.body;
  let query = Salesdb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Updated...");
  });
});

itemorderRouter.delete("/delete/:id", (req, res) => {
  let sql = "DELETE FROM orders_items WHERE id = " + req.params.id;
  let query = Salesdb.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Deleted...");
  });
});

ordersrouter.get("/display", (req, res) => {
  let sql = "SELECT * FROM orders";
  let query = Salesdb.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

ordersrouter.post("/insert", (req, res) => {
  let sql = "INSERT INTO orders SET ?";
  let post = req.body;
  let query = Salesdb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

ordersrouter.put("/select/:id", (req, res) => {
  let sql = "UPDATE orders SET ? WHERE id = " + req.params.id;
  let post = req.body;
  let query = Salesdb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Updated...");
  });
});

ordersrouter.delete("/delete/:id", (req, res) => {
  let sql = "DELETE FROM orders WHERE id = " + req.params.id;
  let query = Salesdb.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Deleted...");
  });
});

storesrouter.get("/display", (req, res) => {
  let sql = "SELECT * FROM stores";
  let query = Salesdb.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

storesrouter.post("/insert", (req, res) => {
  let sql = "INSERT INTO SET stores?";
  let post = req.body;
  let query = Salesdb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

storesrouter.put("/select/:id", (req, res) => {
  let sql = "UPDATE stores SET ? WHERE id = " + req.params.id;
  let post = req.body;
  let query = Salesdb.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Updated...");
  });
});

storesrouter.delete("/delete/:id", (req, res) => {
  let sql = "DELETE FROM stores WHERE id = " + req.params.id;
  let query = Salesdb.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Sale Data Deleted...");
  });
});

//DATABASE SENDING PHOTOS

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/src/Assets"); // Change 'uploads/' to your desired directory path
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

app.post("/upload", upload.single("photo"), async (req, res) => {
  if (!req.file) {
    console.log("No photo was sent");
    return res.status(400).send("No photo uploaded");
  }

  const imagePath = `"../client/src/Assets${req.file.filename}"`; // Adjust path based on your storage location

  // Prepare SQL query to insert data
  const sql = `INSERT INTO PHOTO1 (PHOTONAME) VALUES (?)`;
  let query = pool.query(sql, [imagePath], (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

app.get("/download", (req, res) => {
  let sql = "SELECT * FROM  PHOTO1";
  let query = pool.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});
*/
//DATABASE SENDING PHOTOS
*/
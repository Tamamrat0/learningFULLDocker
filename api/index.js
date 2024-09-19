import express from "express";
import cors from "cors";
// import pkg from 'pg';

import dotenv from "dotenv";
dotenv.config();

// การสร้าง client สำหรับ PostgreSQL
// const { Pool } = pkg;
// const pool = new Pool({
//   user: process.env.DB_USER, // ชื่อผู้ใช้ PostgreSQL
//   host: process.env.DB_HOST, // โฮสต์ของ PostgreSQL
//   database: process.env.DB_DATABASE, // ชื่อฐานข้อมูล
//   password: process.env.DB_PASSWORD, // รหัสผ่าน
//   port: 5432 // พอร์ตของ PostgreSQL
// });

// pool.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });

const app = express();
app.use(cors());

app.get("/products", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.get("/users", async (req, res) => {
  try {
    const data = [
      {
        fullname: "tammarat",
        email: "montree@gmail.com",
      },
      {
        fullname: "tammarat",
        email: "montree@gmail.com",
      },
      {
        fullname: "tammarat",
        email: "montree@gmail.com",
      },
      {
        fullname: "tammarat",
        email: "montree@gmail.com",
      },
    ];
    // const data = await pool.query('SELECT * FROM users');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
});

app.listen(5000, function () {
  console.log("CORS-enabled web server listening on port 80");
});


import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
//import mysql from 'mysql';
import mongoose  from 'mongoose';
import multer from 'multer';
import path from 'path';
import { v2 as cloudinary } from "cloudinary";
import bodyParser from 'body-parser';
import productModel from "./models/product.js";



const app = express()

app.listen(8800, () => {
    console.log('connected to backend!')
})

//middleware

 app.use(express.json())
 app.use(cors({

   origin: "https://buycommswith-mongo-frontend.vercel.app",
  
 }))
 app.use(bodyParser.json())
 app.use(express.static('images'))


   const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, 'images')
   },
   filename: (req, file, cb) => {
      console.log(file)
      cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
   }
 })


 const upload = multer({
   storage: storage,
 }) 
 

   

 cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
 }) 
 
  app.get("/", (req,res) => {
    res.json("hello this is the new backend")
 })
/*
  app.get("/popularproducts", (req,res) => {
   const q = "SELECT * FROM producttable"

   db.query(q, (err,data) => {
      if(err) return res.json(err)
      return res.json(data)
   })
   
 });

 app.get("/popularproducts/:id", (req,res) => {

   const { id } = req.params

   const q = "SELECT * FROM producttable WHERE id = ?"

   db.query(q, [id], (err,data) => {
      if(err) return res.json(err)
      return res.json(data)
   })
   
 });

 app.post("/addProduct", upload.single('image'), (req,res) => {

   const q = "INSERT INTO producttable (`name`, `category`, `desc`, `price`,`image`, `amount`) VALUES (?)"
 
   const values = [
      req.body.name,
      req.body.category,
      req.body.desc,
      req.body.price,
      req.file.filename,
      req.body.amount,
     
     
   ]
   console.log(req.file)
 
   

   db.query(q, [values], (err, data) => {
      if(err) return res.json(err)
      return res.json("Product successfully added!")
   })

  
 }) 



  const db = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
 })
  */


mongoose.connect(process.env.MONGODB_URI)


app.get("/popularproducts", async (req,res) => {
   try {
      const products = await productModel.find()
      res.json(products)
     
      
   } catch (error) {
      console.log(error)
   }
 
   
 });


  app.post("/addProduct", upload.single("image"), async (req,res) => {

   const { name, desc, price, category, amount } = req.body;

  
   try {
      let imageUrl = "";

      if(req.file){

        const uploadRes = await cloudinary.uploader.upload(req.file.path, {
               upload_preset: "buycomms",
         });
        console.log(uploadRes)
         imageUrl = uploadRes.secure_url;

         if(uploadRes){

            productModel.create({
               name,
               desc,
               price,       
               image: imageUrl,
               category,
               amount
            })
            
            return res.json("Product successfully added!")
         }

      }

   } catch (error) {
      res.json(error)
   }
     
   })
 

/*  app.post("/addProduct", upload.single('image'), async (req,res) => {

 

   try {

      await productModel.create({
         name:req.body.name,
         desc:req.body.desc,
         price:req.body.price,       
         image:req.file.filename,
         category:req.body.category,
         amount:req.body.amount,
      })
      
      return res.json("Product successfully added!")

   } catch (error) {
      res.json(error)
   }
     
   }) */


/*  app.get("/popularproducts/:id", async (req,res) => {

   const { id } = req.params;

  try {

   const res = await fetch(`http://localhost:8800/popularproducts/:id`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error("failed to fetch product")
    }
    
   return res.json();
  } catch (error) {
   
   console.log(error)
  }
   
 }); */




     
      
   

/*  export async function getServerSideProps() {

   const password = process.env.DATABASE_PASSWORD
   console.log(`${password}`)
 } */
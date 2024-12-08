const express=require('express')
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const authRouter=require('./routes/auth/auth-routes')
const fetch = require('node-fetch');
const Product = require('./models/Product');
const xml2js = require('xml2js');

require('dotenv').config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongodb connected");
})
.catch((error)=>console.log(error));


const app=express()
const PORT=process.env.PORT || 5000

app.use(
    cors({
        origin:process.env.CLIENT_BASE_URL,
        methods: ['GET', 'POST','DELETE','PUT'],
        allowedHeaders:[
            "Content-Type",
            "Authorization",
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",authRouter);



const username = 'youdecide_in';
const password = '4425bfc';

const authHeader = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
app.get('/api/careers', async (req, res) => {
  const answers = req.query.answers;
  console.log("reached here");

  const url = `https://services.onetcenter.org/ws/mnm/interestprofiler/careers?answers=${answers}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': authHeader,  // Basic Auth header with username:password
        'Content-Type': 'application/json',
      },
    });

    // Check if the response is okay (status code 200)
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    // Get the response as text (because it's XML)
    const xmlText = await response.text();

    // Convert the XML response to JSON
    xml2js.parseString(xmlText, { explicitArray: false }, (err, result) => {
      if (err) {
        console.error('Error parsing XML:', err);
        return res.status(500).json({ error: 'Failed to parse XML response' });
      }

      // Now 'result' contains the JSON object, send it to the frontend
      console.log(result);
      res.json(result);
    });

  } catch (error) {
    console.error('Error fetching ONET data:', error);
    res.status(500).json({ error: 'Failed to fetch careers' });
  }
});




app.get('/api/get15', async (req, res) => {
  console.log("got request for explore page")
  try {
    const products = await Product.find().limit(15); // Fetch 15 products
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error' });
  }
});




app.get('/api/getProductsByCategory', async (req, res) => {
  const { subCategory } = req.query;
  console.log("Received request for subcategory:", subCategory);

  try {
    const products = await Product.find({
      subCategory: new RegExp(`^${subCategory}$`, 'i') // Case-insensitive match for subCategory
    });

    console.log(products);
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



app.get("/api/product/:id", async (req, res) => {

  console.log("Received request for product:", req.params.id);
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

app.listen(PORT,()=>console.log(`Server is now listening on ${PORT}`))
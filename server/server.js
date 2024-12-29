const express=require('express')
const cookieParser=require('cookie-parser')
require('dotenv').config()

const connectDB=require('./config/db')
const corsOptions=require('./config/cors')
const productRouter=require('./routes/product/product-routes')
const careerRouter=require('./routes/career/career-routes')
const authRouter=require('./routes/auth/auth-routes')


connectDB()

const app=express()

app.use(corsOptions);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",authRouter);
app.use('/api/product',productRouter);
app.use('/api', careerRouter);

const PORT=process.env.PORT || 5000



const data = [
    {
        parentONetCode: "11-1011.00",
        occupationTitle: "Chief Executives",
        careerOneStopVideoPage: "https://www.careeronestop.org/videos/careeronestop-videos.aspx?videocode=11101100",
        youtubeVideoPage: "https://www.youtube.com/watch?v=YJI8hywItKE",
        youtubeEmbedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/YJI8hywItKE?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        parentVideo: "11-1011.00"
    },
    {
        parentONetCode: "11-1011.03",
        occupationTitle: "Chief Sustainability Officers",
        careerOneStopVideoPage: "https://www.careeronestop.org/videos/careeronestop-videos.aspx?videocode=11101103",
        youtubeVideoPage: "https://www.youtube.com/watch?v=KHi_Vns5gc4",
        youtubeEmbedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/KHi_Vns5gc4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        parentVideo: "11-1011.03"
    },
    // Add remaining data objects here
];







app.listen(PORT,()=>console.log(`Server is now listening on ${PORT}`))
const mongoose=require("mongoose");

const URI='mongodb+srv://user:Adarsh%4096@cluster0.ikcrna2.mongodb.net/'

const conn=async(req,res)=>{
    try {
        await mongoose
    .connect(URI)
    .then(()=>{
        console.log("Connected")
    })
    } catch (error) {
      res.status(400).json({
        message:'Not Connected',
      }) 
    }
}

conn()
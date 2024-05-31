import app from "./app.js";
import dotenv from 'dotenv';
const PORT=4000


app.listen(PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
    
})

const express = require('express');
const v1AccountRouter = require("./v1/routes/accountRoutes");

const app = express();
const PORT = process.env.PORT || 3000;  

app.use(express.json());
app.use("/api/v1/accounts", v1AccountRouter);


app.listen(PORT, () => {
    console.log(`🚀 Server listen on port ${PORT} 🔥`)
});

//agregar esto a un redmi 
//https://www.youtube.com/watch?v=qFmwRriNJWs
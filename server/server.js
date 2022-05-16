const port = 8000;
const db_name = "smartpump3";
const express = require("express");
const cors = require("cors");

require("./config/mongoose.config")(db_name);

const app = express();
//post requests sending our json -> rec.body will be undefined without this//
app.use(express.json());
app.use(cors());

require("./routes/user.routes")(app);

app.listen(port, () => { console.log(`Listening on port ${port} to respond to.`)});


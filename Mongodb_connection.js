let mongodb = require("mongoose")

require("dotenv").config()

mongodb.connect(process.env.URL).



then(()=>{

    console.log("Alaaaaa Connected")


}).catch((e) => {

    console.log(e)
})
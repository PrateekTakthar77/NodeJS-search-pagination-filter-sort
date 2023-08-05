const mongoose = require("mongoose");

const dbConnect = () => {
    const connectionParams = { useNewUrlParser: true };
    mongoose.connect(process.env.DB, connectionParams);

    mongoose.connection.on("connected", () => {
        console.log("coonected to database sucessfully");
    })

    mongoose.connection.on("error", (err) => {
        console.log("error while connecting to database " + err);
    })

    mongoose.connection.on("disconnected", () => {
        console.log("discoonected to database");
    })
}

module.exports = dbConnect;
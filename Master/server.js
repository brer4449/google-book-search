const express = require("express");
const dotenv = require("dotenv");
// const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3001;

// Load env vars (config file)
dotenv.config({ path: "./config/config.env" });

// Connect to the Mongo DB
connectDB();

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// mongoose.connect(
//   process.env.MONGODB_URI ||
//     "mongodb://user1:password1@ds125871.mlab.com:25871/heroku_0xn0jnk7",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// Start the API server
const server = app.listen(PORT, () =>
  console.log(
    `🌎  ==> API Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}!`
  )
);

// Global handler for all unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  // want it to exit with failure so pass in 1 in order to do that
  server.close(() => process.exit(1));
});

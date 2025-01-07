import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

/* ROUTE IMPORTS */
import dashboardRoutes from "./routes/dashboardRoutes";
import productRoutes from "./routes/productRoutes";
/* CONFIGURATIONS */
dotenv.config();
const app = express();
// parses incoming JSON request bodies and makes them accessible via req.body.
app.use(express.json());
// Adds security-related HTTP headers to protect against common web vulnerabilities.
app.use(helmet());
// Allows resources to be shared between origins. Specifically sets the Cross-Origin-Resource-Policy header to "cross-origin".
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
// Logs HTTP requests in a predefined "common" format (e.g., method, URL, status code, response time).
app.use(morgan("common"));
// Parses incoming requests with JSON payloads.
app.use(bodyParser.json());
// Parses URL-encoded data (typically from HTML forms) with simple query string support.
app.use(bodyParser.urlencoded({extended: false}))
// Enables CORS for handling requests from other domains, allowing APIs to be consumed by a frontend or third-party applications.
app.use(cors());

/* ROUTES */

app.use("/dashboard", dashboardRoutes); // http://localhost:3000/dashboard
app.use("/products", productRoutes); // http://localhost:3000/products
/* SERVER */
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
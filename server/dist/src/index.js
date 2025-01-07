"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
/* ROUTE IMPORTS */
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
/* CONFIGURATIONS */
dotenv_1.default.config();
const app = (0, express_1.default)();
// parses incoming JSON request bodies and makes them accessible via req.body.
app.use(express_1.default.json());
// Adds security-related HTTP headers to protect against common web vulnerabilities.
app.use((0, helmet_1.default)());
// Allows resources to be shared between origins. Specifically sets the Cross-Origin-Resource-Policy header to "cross-origin".
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
// Logs HTTP requests in a predefined "common" format (e.g., method, URL, status code, response time).
app.use((0, morgan_1.default)("common"));
// Parses incoming requests with JSON payloads.
app.use(body_parser_1.default.json());
// Parses URL-encoded data (typically from HTML forms) with simple query string support.
app.use(body_parser_1.default.urlencoded({ extended: false }));
// Enables CORS for handling requests from other domains, allowing APIs to be consumed by a frontend or third-party applications.
app.use((0, cors_1.default)());
/* ROUTES */
app.use("/dashboard", dashboardRoutes_1.default); // http://localhost:3000/dashboard
app.use("/products", productRoutes_1.default); // http://localhost:3000/products
/* SERVER */
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Parser
app.use(express_1.default.json()); // Parse Json
app.use(express_1.default.text()); // Parse Raw Text
// Middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
};
// Router
const userRouter = express_1.default.Router(); // Creating the instance
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter); // We must use the router
app.use("/api/v1/courses", courseRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "Created the user successfully",
        user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: false,
        message: "Not Found",
        course,
    });
});
app.get("/", logger, (req, res) => {
    res.send("Hello World from Bangladesh!");
});
app.post("/", (req, res) => {
    console.log(req.body);
    // res.send("Got Data");
    res.json({
        message: "Successfully Received Data",
    });
});
exports.default = app;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Parsers
app.use(express_1.default.json()); // convert the req.body to json
app.use(express_1.default.text()); // conver the req.body to text
// Middlewares
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// Routing
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
// Creating User in this path
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created successfully",
        data: user,
    });
});
// Creating Courses in this path
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "Course is created successfully",
        data: course,
    });
});
app.get("/", logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("Hello World!");
    // Catch error by try-catch block
    try {
        // Intentionally occured error
        res.send(something);
    }
    catch (error) {
        console.log(error);
        // Either this way
        // res.status(400).json({
        //   success: false,
        //   message: "Failed to get data",
        // });
        // Or this way
        next(error);
    }
}));
// Using Params
app.get("/:roll/:regNum", logger, (req, res) => {
    console.log(req.params);
    res.send("Getting the data through params");
});
// Using Query
app.get("/", logger, (req, res) => {
    console.log(req.query);
    res.send("Getting the email by query");
});
app.post("/", logger, (req, res) => {
    console.log(req.body);
    // res.send("Got Data");
    // We can use res.json to send some json data as response
    res.json({
        message: "Successfully received data",
    });
});
// Fallback Route
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not defined",
    });
});
// Global Error Handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
});
exports.default = app;

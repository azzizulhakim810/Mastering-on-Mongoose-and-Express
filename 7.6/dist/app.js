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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Parser
app.use(express_1.default.json()); // Parse Json
app.use(express_1.default.text()); // Parse Raw Text
// Middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
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
app.get("/", logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(hey);
    }
    catch (error) {
        // console.log(error);
        // res.status(400).json({
        //   success: false,
        //   message: "Data not found",
        // });
        // Refer the error to Global Error Handler
        next(error);
    }
}));
app.post("/", (req, res) => {
    console.log(req.body);
    // res.send("Got Data");
    res.json({
        message: "Successfully Received Data",
    });
});
// Route Error Handler
// This * doesn't support
// app.all("*", (req: Request, res: Response) => {
//   res.status(400).json({
//     success: false,
//     message: "Route isn't found",
//   });
// });
app.use((req, res) => {
    res.status(400).json({
        success: false,
        message: "Route isn't found",
    });
});
// Global Error Handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            messsage: "Something went wrong",
        });
    }
});
exports.default = app;

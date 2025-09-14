import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

// Parser
app.use(express.json()); // Parse Json
app.use(express.text()); // Parse Raw Text

// Middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
};

// Router
const userRouter = express.Router(); // Creating the instance
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter); // We must use the router
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;

  console.log(user);

  res.json({
    success: true,
    message: "Created the user successfully",
    user,
  });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;

  console.log(course);

  res.json({
    success: false,
    message: "Not Found",
    course,
  });
});

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello World from Bangladesh!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  // res.send("Got Data");
  res.json({
    message: "Successfully Received Data",
  });
});

export default app;

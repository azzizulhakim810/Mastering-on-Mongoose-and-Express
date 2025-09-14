import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

// Parser
app.use(express.json()); // Parse Json
app.use(express.text()); // Parse Raw Text

// Middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
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

app.get(
  "/",
  logger,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(hey);
    } catch (error) {
      // console.log(error);

      // res.status(400).json({
      //   success: false,
      //   message: "Data not found",
      // });

      // Refer the error to Global Error Handler
      next(error);
    }
  }
);

app.post("/", (req: Request, res: Response) => {
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

app.use((req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route isn't found",
  });
});

// Global Error Handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      messsage: "Something went wrong",
    });
  }
});

export default app;

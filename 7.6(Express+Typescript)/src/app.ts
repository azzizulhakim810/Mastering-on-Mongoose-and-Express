// Watch the ts file all the time & update the dist file according to it, using tsc-w
// Update the server everytime after working, install nodemon as a dev-dependency & add start:dev codeline to package.json file

// const express = require("express");
import express, { NextFunction, Request, Response } from "express";
const app = express();

// Parsers
app.use(express.json()); // convert the req.body to json
app.use(express.text()); // conver the req.body to text

// Middlewares
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

// Routing
const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

// Creating User in this path
userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "User is created successfully",
    data: user,
  });
});

// Creating Courses in this path
courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);

  res.json({
    success: true,
    message: "Course is created successfully",
    data: course,
  });
});

app.get(
  "/",
  logger,
  async (req: Request, res: Response, next: NextFunction) => {
    // res.send("Hello World!");

    // Catch error by try-catch block
    try {
      res.send(something); // Intentionally occured error
    } catch (error) {
      console.log(error);
      // Either this way to catch & show the error
      // res.status(400).json({
      //   success: false,
      //   message: "Failed to get data",
      // });

      // Or to pass the error to the Global Error Handler
      next(error);
    }
  }
);

// Using Params
app.get("/:roll/:regNum", logger, (req: Request, res: Response) => {
  console.log(req.params);
  res.send("Getting the data through params");
});

// Using Query
app.get("/", logger, (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Getting the email by query");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  // res.send("Got Data");

  // We can use res.json to send some json data as response
  res.json({
    message: "Successfully received data",
  });
});

// Fallback Route
app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route is not defined",
  });
});

// Global Error Handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

export default app;

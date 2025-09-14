import express, { Request, Response } from "express";
const app = express();
const port = 3000;

// Parser
app.use(express.json()); // Parse Json
app.use(express.text()); // Parse Raw Text

app.get("/", (req: Request, res: Response) => {
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

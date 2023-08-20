import express from "express";
import fetch from "node-fetch"; // Import the fetch function
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/get-products", async (req, res) => {
  const url = "https://dev-test.cimet.io/plan-list";

  // const { authToken, apiKey } = req.headers;
  // const requestBody = req.body;
  const apiKey = "4NKQ3-815C2-8T5Q2-16318-55301";
  const authToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5IjoiNE5LUTMtODE1QzItOFQ1UTItMTYzMTgtNTUzMDEiLCJzdWIiOjQzOCwiaXNzIjoiaHR0cHM6Ly9kZXZjb3JlMDIuY2ltZXQuaW8vdjEvZ2VuZXJhdGUtdG9rZW4iLCJpYXQiOjE2OTI1MjI1MTcsImV4cCI6MTY5MjUzMzMxNywibmJmIjoxNjkyNTIyNTE3LCJqdGkiOiJjMUg4eDRjdWJDbTZZN3BlIn0.MD3mOlqVwWZuWAjDPZqpqs87_RaXiEBPKUT0y0oHvac"; // Replace this with the actual token

  // console.log("request", req.body);

  const headers = {
    "api-key": apiKey,
    "auth-token": authToken,
    "Content-Type": "application/json",
  };

  const requestBody = {
    session_id:
      "eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9", // Replace this with the actual session ID
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

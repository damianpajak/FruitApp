import axios from "axios";

export async function handle(event, context) {
  try {
    const response = await axios.get(
      "https://www.fruityvice.com/api/fruit/all"
    );

    return {
      statusCode: 200,
      handlers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Data download error" }),
    };
  }
}

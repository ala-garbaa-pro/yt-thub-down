import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const {
    query: { url },
  } = request;

  fetch(`${url}`, { method: "HEAD" })
    .then((res) => {
      if (res.ok) {
        response.status(200).json({ message: "exists" });
      } else {
        response.status(404).json({ message: "not exists" });
      }
    })
    .catch((err) => console.log("Error:", err));
}

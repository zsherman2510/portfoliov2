//import api_url
import { API_URL } from "@/config/index";
import cookie from "cookie";
//export async function that passes in req and res
//check if req.method === post
export default async function (req, res) {
  if (req.method === "GET") {
    if (!req.headers.cookie) {
      console.log("not logged in");
      res.status(403).json({ message: "not logged in" });
      return;
    }
    //made just for a deployment
    const { token } = cookie.parse(req.headers.cookie);

    const strapiRes = await fetch(`${API_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = await strapiRes.json();

    if (strapiRes.ok) {
      res.status(200).json({ user });
    } else {
      res.status(403).json({ message: "user forbidden" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method}not allowed` });
  }
}

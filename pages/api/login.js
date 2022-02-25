// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import api_url
import { API_URL } from "@/config/index";
import cookie from "cookie";
//export async function that passes in req and res
//check if req.method === post
export default async function (req, res) {
  if (req.method === "POST") {
    const { identifier, password } = req.body;
    
    const strapiRes = await fetch(
		`https://glacial-falls-68810.herokuapp.com/auth/local`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				identifier,
				password,
			}),
		}
	);

    const data = await strapiRes.json();
    if (strapiRes.ok) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json({ user: data.user });
    } else {
      res
        .status(data.statusCode)
        .json({ message: data.message[0].messages[0].message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method}not allowed` });
  }
}

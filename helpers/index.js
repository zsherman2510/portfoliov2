import cookie from "cookie";
import Error from "next/error";
export function parseCookies(req) {
  console.log(req.data);
  return cookie.parse(req ? req.headers.cookie || "" : null);
}

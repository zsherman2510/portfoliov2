import cookie from "cookie";
import Error from "next/error";
export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : "");
}

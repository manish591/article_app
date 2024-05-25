import jwt, { JwtPayload } from "jsonwebtoken";
import { ACCESS_TOKEN_EXPIRY, ACCESS_TOKEN_SECRET } from "./constants";

function signJwt(payload: JwtPayload) {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
  });
}

function verifyJwt(token: string) {
  return jwt.verify(token, ACCESS_TOKEN_SECRET);
}

export {
  signJwt,
  verifyJwt
};

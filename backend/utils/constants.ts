export const PORT = process.env.port ?? 3000;
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET ?? "jwttoken";
export const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY ?? "1d";
export const ACESSS_TOKEN_COOKIE_NAME = "access-token";
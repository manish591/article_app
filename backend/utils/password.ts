import bcrypt from "bcrypt";

async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

async function verifyPassword(encodedPassword: string, passwordToCompare: string) {
  return await bcrypt.compare(passwordToCompare, encodedPassword);
}

export {
  hashPassword,
  verifyPassword
};
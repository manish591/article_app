import { randomUUID } from "crypto";

export function generateUsername(first_name: string, last_name: string) {
  return `${first_name}_${last_name}_${randomUUID()}`;
}
import { hash, compare, genSalt } from "bcrypt";

export const hashPassword = async (password: string) => {
  const saltRounds = 10;
  const salt = await genSalt(saltRounds);
  const passwordHash = await hash(password, salt);
  
  return passwordHash
}

export const comparePassword = async (hashPassword: string, password: string) => {
  const result = await compare(password, hashPassword);
  return result;
}
export interface User {
  _id?: number,
  username: string,
  name: string,
  surname: string,
  email: string,
  dateOfBirth: string,
  password: string,
  role?: string,
  createdAt?: string,
  version?: number
}

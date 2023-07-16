import { User } from "../models/user.model";

export const USERS: User[] = [
  {
    _id: 1,
    username: 'Karasu',
    name: 'Matteo',
    surname: 'Forcina',
    email: 'forcina.matteo@gmail.com',
    dateOfBirth: '1994-01-29',
    password: 'matteo',
    role: '1411912',
    createdAt: '2023-07-16'
  },
  {
    _id: 2,
    username: 'Babayaga',
    name: 'John',
    surname: 'Wick',
    email: 'wicked@morph.com',
    dateOfBirth: '1964-09-02',
    password: 'john',
    role: 'user',
    createdAt: '2023-07-17'
  },
]

import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      name: "Jongjate",
      email: "jongjate.ch@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
    {
      name: "Admin",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
  ],
};

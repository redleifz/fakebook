import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      firstName: "Jongjate",
      surName: "Choomjairug",
      email: "jongjate.ch@gmail.com",
      password: bcrypt.hashSync("123456"),
      dateOfBirth: "1987-08-03",
      gender: "male",
      isAdmin: false,
    },
    {
      firstName: "Admin",
      surName: "Fakebook",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("123456"),
      dateOfBirth: "1900-01-01",
      gender: "other",
      isAdmin: true,
    },
  ],
};

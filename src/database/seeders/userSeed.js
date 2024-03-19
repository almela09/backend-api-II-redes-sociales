import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import bcrypt from 'bcryptjs';
import User from "../models/User.js"; 

const userSeeder = async () => {
  console.log("Seeding users...");

  // Opcional: Limpia la colección de usuarios existente
  await User.deleteMany({});

  const users = [];
  
  for (let i = 0; i < 10; i++) {
    const hashedPassword = await bcrypt.hash("1234567891", 10); // Ejemplo de hash para todos por simplicidad
    users.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role: faker.helpers.arrayElement(['user', 'admin', 'super_admin']), // Asigna roles de manera aleatoria
    });
  }

  // Asegurarse de que al menos un usuario sea super_admin
  users[0].role = 'super_admin'; // Asigna explícitamente el rol super_admin al primer usuario

  try {
    await User.insertMany(users); // Inserta los usuarios generados en la base de datos
    console.log("Users seeded successfully");
  } catch (error) {
    console.error("Error seeding users:", error);
  }
};

export default userSeeder;
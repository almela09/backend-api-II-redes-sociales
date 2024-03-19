import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import Post from "../models/Post.js"; // Asegúrate de ajustar la ruta al modelo Post según tu proyecto
import User from "../models/User.js"; // Asegúrate de que la ruta al modelo User sea correcta

const seedPosts = async () => {
  console.log("Seeding posts...");

  // Opcional: Borra todos los posts existentes para comenzar de cero
  await Post.deleteMany({});

  // Encuentra todos los usuarios para asociar los posts
  const users = await User.find();
  if (users.length === 0) {
    throw new Error("No users found. Please seed users first.");
  }

  const posts = [];

  for (let i = 0; i < 50; i++) { // Genera 50 posts como ejemplo
    const randomUserIndex = faker.datatype.number({ min: 0, max: users.length - 1 });
    const authorId = users[randomUserIndex]._id;

    // Genera un número aleatorio de likes por post
    const likes = [];
    const numberOfLikes = faker.datatype.number({ min: 0, max: 10 });
    for (let j = 0; j < numberOfLikes; j++) {
      const randomLikeIndex = faker.datatype.number({ min: 0, max: users.length - 1 });
      likes.push(users[randomLikeIndex]._id);
    }

    posts.push({
      title: faker.lorem.sentence(),
      text: faker.lorem.paragraph(),
      author: authorId,
      like: likes
    });
  }

  try {
    await Post.insertMany(posts); // Inserta los posts generados en la base de datos
    console.log("Posts seeded successfully");
  } catch (error) {
    console.error("Error seeding posts:", error);
  }
};

export default seedPosts;

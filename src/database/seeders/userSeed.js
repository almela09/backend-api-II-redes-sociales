import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';
import User from '../models/User.js'; 
import 'dotenv/config';

// Función para generar usuarios ficticios
export const generateUsers = async (number) => {
  const users = [];

  for (let i = 0; i < number; i++) {
    // Genera un hash de la contraseña ficticia
    const hashedPassword = await bcrypt.hash('password123', 10); // Usar una contraseña común para todos por simplicidad

    users.push(new User({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: hashedPassword,
      // followers y followins se dejan como arrays vacíos por defecto
      role: faker.helpers.arrayElement(['user', 'admin', 'super_admin']), // Asigna un rol aleatorio
    }));
  


    users.push(new User({
        name: 'super_admin',
        email: 'superadmin@superadmin.com',
        password: hashedPassword,
        role: 'super_admin'
      }));
      
    }
  // Guarda todos los usuarios en la base de datos
  try {
    await User.insertMany(users);
    console.log(`${number} users have been successfully created.`);
  } catch (error) {
    console.error('Error creating users:', error);
  }
};

// Conexión a MongoDB y llamada a la función generateUsers
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    generateUsers(10); // Genera 10 usuarios ficticios
  })
  .catch(err => console.error('Error connecting to MongoDB', err));

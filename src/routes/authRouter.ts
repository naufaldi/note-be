import Elysia, { t } from 'elysia';
import { prisma } from '../utils/prisma';

export const authRouter = new Elysia()

  .post(
    '/register',
    async ({ body, set }) => {
      const { email, password } = body;
      // check collision
      let user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (user) {
        set.status = 400;
        return {
          message: 'User already exists',
        };
      }
      // hashing password
      const hashedPassword = await Bun.password.hash(password, 'argon2d');
      // create user
      user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
      set.status = 200;
      return {
        message: 'User Registered successfully',
        user: {
          id: user.id,
          email: user.email,
        },
      };
    },
    {
      body: t.Object({
        email: t.String(),
        password: t.String(),
      }),
    }
  )
  .post(
    '/login',
    async ({ body, set }) => {
      const { email, password } = body;
      // find user by
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) {
        set.status = 404;
        return {
          message: 'User not found',
        };
      }
      //  check password
      const isPasswordValid = await Bun.password.verify(
        password,
        user.password,
        'argon2d'
      );
      if (!isPasswordValid) {
        set.status = 401;
        return {
          message: 'Invalid password',
        };
      }
      // generate session_id
      const session = await prisma.session.create({
        data: {
          user: {
            connect: {
              email,
            },
          },
        },
      });
      set.status = 200;
      return {
        message: 'User logged in successfully',
        session_id: session.id,
      };
    },
    {
      body: t.Object({
        email: t.String(),
        password: t.String(),
      }),
    }
  );

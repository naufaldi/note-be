import { Elysia, t } from 'elysia';
import { prisma } from './utils/prisma';
import { swagger } from '@elysiajs/swagger';
import { noteRouter } from './routes/noteRouter';

const app = new Elysia()
  .use(
    swagger({
      path: '/docs',
      documentation: {
        info: {
          title: 'Notes API',
          version: '1.0.0',
        },
      },
    })
  )
  .use(noteRouter)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

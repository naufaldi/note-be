import { prisma } from '../utils/prisma';
import { Context, t } from 'elysia';

export const createNoteSchema = {
  body: t.Object({
    content: t.String(),
  }),
};

export const createNote = async ({ body, set }: Context) => {
  const { content } = body as { content: string }; // type assertion
  const newNote = await prisma.note.create({
    data: {
      content,
    },
  });
  set.status = 201;
  return newNote;
};

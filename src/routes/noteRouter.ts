import Elysia, { t } from 'elysia';
import { prisma } from '../utils/prisma';
import { getAllNotes } from '../controllers/getAllNotes';
import { createNote, createNoteSchema } from '../controllers/createNote';
import { getSingleNote } from '../controllers/getSingleNote';
import { updateNote, updateNoteSchema } from '../controllers/updateNote';
import { deleteNote } from '../controllers/deleteNote';

export const noteRouter = new Elysia()
  .get('/', getAllNotes)
  .post('/', createNote, createNoteSchema)
  .get('/:id', getSingleNote)
  .patch('/:id', updateNote, updateNoteSchema)
  .delete('/:id', deleteNote);

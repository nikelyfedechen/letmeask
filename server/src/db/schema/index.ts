// Barrel File:  um arquivo que reexporta arquivos que estão dentro da pasta.

import { audioChunks } from './audio-chunks.ts';
import { questions } from './questions.ts';
import { rooms } from './rooms.ts';

export const schema = {
  rooms,
  questions,
  audioChunks,
};

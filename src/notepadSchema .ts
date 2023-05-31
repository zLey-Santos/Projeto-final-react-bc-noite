import { z } from "zod";

const title = z
  .string()
  .min(4, {
    message: "O título precisa ter pelo menos 4 caracteres",
  })
  .max(16, {
    message: "O título precisa ter no máximo 16 caracters",
  });

const subtitle = z
  .string()
  .min(8, {
    message: "O subtítulo precisa ter pelo menos 8 caracteres",
  })
  .max(24, {
    message: "O subtítulo precisa ter no máximo 24 caracters",
  });

const content = z
  .string()
  .min(16, {
    message: "O conteudo precisa ter pelo menos 16 caracteres",
  })
  .max(140, {
    message: "O conteudo precisa ter no máximo 140 caracters",
  });

export const NotepadSchema = z.object({
  title,
  subtitle,
  content,
});

import { loadRecipe } from "../../../store.js";

export const GET = Run.GET((context, next) => {
  return next({ recipe: loadRecipe(Number(context.params.id)) });
});

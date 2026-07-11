import { loadRecipes } from "../store.js";

export const GET = Run.GET((context, next) => {
  return next({ recipes: loadRecipes() });
});

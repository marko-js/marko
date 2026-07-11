import { addRecipe } from "../../../store.js";

export const POST = Run.POST(async (context) => {
  const form = await context.request.formData();
  const title = String(form.get("title") || "").trim();
  const minutes = Number(form.get("minutes")) || 0;
  if (!title) return context.redirect("/recipes/new", 303);
  const recipe = addRecipe({ title, minutes });
  return context.redirect(`/recipes/${recipe.id}`, 303);
});

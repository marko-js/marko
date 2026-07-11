import { addRecipe } from "../../../store.js";

export const POST = Run.POST(async (context) => {
  const form = await context.request.formData();
  const title = String(form.get("title") || "").trim();
  const minutes = Number(form.get("minutes")) || 0;
  const raw = String(form.get("difficulty") || "");
  const difficulty = ["easy", "medium", "hard"].includes(raw) ? raw : "medium";
  if (!title) return context.redirect("/recipes/new", 303);
  const recipe = addRecipe({ title, minutes, difficulty });
  return context.redirect(`/recipes/${recipe.id}`, 303);
});

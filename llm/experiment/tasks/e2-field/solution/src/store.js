const recipes = [
  { id: 1, title: "Tomato soup", minutes: 30, rating: 4, difficulty: "medium", ingredients: ["tomatoes", "onion", "basil"] },
  { id: 2, title: "Garlic bread", minutes: 15, rating: 5, difficulty: "medium", ingredients: ["bread", "garlic", "butter"] },
  { id: 3, title: "Lemon pasta", minutes: 20, rating: 3, difficulty: "medium", ingredients: ["pasta", "lemon", "cheese"] },
];
let nextId = 4;

export function loadRecipes() {
  return new Promise((resolve) => setTimeout(() => resolve(recipes), 30));
}

export function loadRecipe(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(recipes.find((r) => r.id === id) ?? null), 30),
  );
}

export function addRecipe({ title, minutes, difficulty = "medium" }) {
  const recipe = { id: nextId++, title, minutes, rating: 0, difficulty, ingredients: [] };
  recipes.push(recipe);
  return recipe;
}

import { addEntry } from "../../store.js";

export const POST = Run.POST(async (context) => {
  const data = await context.request.formData();
  const message = String(data.get("message") || "").trim();
  if (message) addEntry(message);
  return context.redirect("/guestbook", 303);
});

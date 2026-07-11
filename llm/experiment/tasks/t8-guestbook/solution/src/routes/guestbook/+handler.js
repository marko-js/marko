import { addEntry } from "../../store.js";

export async function POST(context) {
  const data = await context.request.formData();
  const message = String(data.get("message") || "").trim();
  if (message) addEntry(message);
  return new Response(null, {
    status: 303,
    headers: { location: "/guestbook" },
  });
}

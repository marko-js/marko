import { loadHeadlines } from "../../store.js";

export const GET = Run.GET((context, next) => {
  return next({ headlines: loadHeadlines() });
});

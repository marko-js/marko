import type { TestConfig } from "../../main.test";

// Granular global guarding for a script reading TWO keys: a frame changing
// only an UNREAD key must not re-run it; changing EITHER read key must.
const globals = (brand: string, locale: string, other: string) => ({
  $global: {
    brand,
    locale,
    other,
    serializedGlobals: ["brand", "locale", "other"],
  },
});

export const config: TestConfig = {
  persisted: true,
  // The script leaves state on the page a fresh render lacks.
  skip_fresh_render: true,
  steps: [
    globals("Marko", "en", "x"),
    globals("Marko", "en", "y"),
    globals("Marko", "fr", "y"),
    globals("Fresh", "fr", "y"),
  ],
};

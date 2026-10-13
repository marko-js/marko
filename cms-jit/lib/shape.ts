import { createHash } from "node:crypto";

import type { CmsPage } from "./pages";

/**
 * Per block type, the input fields a specialized template may bake in.
 * Everything else is content and stays runtime input.
 */
export const structuralFields: Record<string, readonly string[]> = {
  hero: ["variant"],
  "card-grid": ["columns"],
  "rich-text": [],
  "promo-banner": ["tone", "dismissible"],
  carousel: ["autoplay", "showDots"],
  faq: ["multiOpen"],
};

export interface Shape {
  sections: { type: string; [field: string]: unknown }[];
}

export function getShape(page: CmsPage): Shape {
  return {
    sections: page.sections.map(({ type, props }) => {
      const section: Shape["sections"][number] = { type };
      for (const field of structuralFields[type]) section[field] = props[field];
      return section;
    }),
  };
}

export function hashValue(value: unknown) {
  return createHash("sha256")
    .update(canonicalJSON(value))
    .digest("base64url")
    .slice(0, 16);
}

function canonicalJSON(value: unknown): string {
  return JSON.stringify(value, (_key, val) =>
    val && typeof val === "object" && !Array.isArray(val)
      ? Object.fromEntries(
          Object.keys(val)
            .sort()
            .map((k) => [k, val[k]]),
        )
      : val,
  );
}

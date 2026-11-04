import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const globals = (brand: string, flag: string, mark: string) => ({
  $global: { brand, flag, mark, serializedGlobals: ["brand", "flag", "mark"] },
});

// An output pin: a child value mixing a server-fed param with `$global` subscribes
// its `$global` join unguarded (the render is the same either way).
export const config: TestConfig = {
  patches: true,
  steps: [
    globals("a", "1", "x"),
    globals("b", "2", "x"),
    globals("b", "2", "y"),
    click,
    globals("c", "3", "z"),
  ],
};

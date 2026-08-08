import type { TestConfig } from "../../main.test";

function type(id: string, text: string) {
  return (document: Document) => {
    const el = document.getElementById(id) as HTMLInputElement;
    el.value = text;
    el.dispatchEvent(
      new (document.defaultView as any).Event("input", { bubbles: true }),
    );
  };
}

export const config: TestConfig = {
  steps: [{}, type("refined", "42px"), type("plain", "7em")],
};

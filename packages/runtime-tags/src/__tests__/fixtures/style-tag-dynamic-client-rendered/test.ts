import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A client-rendered dynamic `<style>` keeps the declaration a closure rendered
// before its shell (client render only: optimize renames its properties).
export const config: TestConfig = {
  skip_ssr: true,
  steps: [{ color: "red" }, click],
};

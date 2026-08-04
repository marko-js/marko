import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<script>` reading only client state keeps its section's shell: a
// construct wires the owner chain before effects run, so the mounted
// script sees the live state (and state changes re-run it client-side).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: false },
    click,
    { title: "Store!", show: true },
  ],
};

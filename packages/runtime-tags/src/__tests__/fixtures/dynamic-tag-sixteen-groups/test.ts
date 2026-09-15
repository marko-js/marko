import type { TestConfig } from "../../main.test";

const click = (id: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(`#${id}`)!.click();
};

// A dynamic tag's child masks every group as client-fed, including one
// past the numeric mask's fifteen groups.
export const config: TestConfig = {
  steps: [{}, click("inc")],
};

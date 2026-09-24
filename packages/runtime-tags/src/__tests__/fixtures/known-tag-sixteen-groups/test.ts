import type { TestConfig } from "../../main.test";

const click = (id: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(`#${id}`)!.click();
};

// Constants passed to params past the numeric mask's fifteen groups
// serialize no markers or values.
export const config: TestConfig = {
  steps: [{}, click("inc")],
};

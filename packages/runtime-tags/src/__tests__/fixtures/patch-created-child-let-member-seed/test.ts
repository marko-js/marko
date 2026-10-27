import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const user = (name: string) => ({ name, passwordHash: "SECRET_" + name });

// A child a flush creates seeds what the document writes of its
// never-assigned `<let>`: the member its handler reads, not the whole value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, user: user("SHOWN_ab") },
    { show: true, user: user("SHOWN_abcdef") },
    click,
  ],
};

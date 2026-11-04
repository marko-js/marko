import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLElement>("li")!.click();
};

const step = (id: string) => ({
  items: [{ id: "SHOWN_a" + id }, { id: "SHOWN_b" + id }],
  data: { q: "SHOWN_q" + id, token: "SECRET_token" + id },
});

// Loop rows with client state read a param only in a hole the flush fills:
// neither the page nor a patch ships the param.
export const config: TestConfig = {
  patches: true,
  steps: [step("1"), click, step("2")],
};

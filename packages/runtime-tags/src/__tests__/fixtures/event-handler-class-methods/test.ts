import type { TestConfig } from "../../main";

function click(id: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(`#${id}`)!.click();
  };
}

export const config: TestConfig = {
  steps: [{}, click("c"), click("a"), click("b")],
};

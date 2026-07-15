import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickLastItem = (container: Element) => {
  const buttons = container.querySelectorAll<HTMLButtonElement>("button");
  buttons[buttons.length - 1].click();
};

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        groups: [
          { id: "a", items: [{ id: "same" }] },
          { id: "b", items: [{ id: "same" }] },
        ],
      },
    },
    clickLastItem,
    navigate({
      $global: {
        persisted: true,
        groups: [
          { id: "a", items: [{ id: "same" }, { id: "new" }] },
          { id: "b", items: [{ id: "same" }] },
        ],
      },
    }),
    clickLastItem,
    navigate({
      $global: {
        persisted: true,
        groups: [
          { id: "a", items: [{ id: "new" }] },
          { id: "b", items: [{ id: "same" }, { id: "new" }] },
        ],
      },
    }),
  ],
};

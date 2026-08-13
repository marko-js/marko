import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    {
      items: [
        { id: "a", label: "Apple" },
        { id: "b", label: "Banana" },
        { id: "c", label: "Cherry" },
      ],
    },
    wait,
    // Reordered + one removed + one added: keyed branches move, not re-create.
    {
      items: [
        { id: "c", label: "Cherry" },
        { id: "a", label: "Apricot" },
        { id: "d", label: "Date" },
      ],
    },
    wait,
  ],
};

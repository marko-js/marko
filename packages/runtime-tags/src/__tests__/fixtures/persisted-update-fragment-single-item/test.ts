import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// The first navigation adds exactly one request-derived loop item as a
// resumable fragment. Its one-item stable child loop is walker-bound as a
// scalar branch scope; the next sparse update must normalize that scope before
// merging it.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        items: [{ id: "existing", view: "a" }],
      },
    },
    navigate({
      $global: {
        persisted: true,
        items: [
          { id: "existing", view: "a" },
          { id: "one", view: "a" },
        ],
      },
    }),
    navigate({
      $global: {
        persisted: true,
        items: [
          { id: "existing", view: "a" },
          { id: "one", view: "b" },
        ],
      },
    }),
  ],
};

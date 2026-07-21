import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// One request-derived loop item constructs from the body's wire shell; its one-item
// child loop walker-binds as a scalar the next sparse update must normalize.
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

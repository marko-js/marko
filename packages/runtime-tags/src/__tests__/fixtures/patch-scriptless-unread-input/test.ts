import type { TestConfig } from "../../main.test";

const user = (id: string) => ({
  name: "SHOWN_name" + id,
  passwordHash: "SECRET_hash" + id,
});

// A page with no client code: it writes no input, as a plain build writes
// no script at all.
export const config: TestConfig = {
  patches: true,
  steps: [
    {
      show: false,
      user: user("1"),
      user2: user("1b"),
      tag: "section",
      cls: { SHOWN_a1: true, UNRENDERED_b1: false },
      user3: user("1c"),
    },
    {
      show: true,
      user: user("2"),
      user2: user("2b"),
      tag: "div",
      cls: { SHOWN_a2: true, UNRENDERED_b2: false },
      user3: user("2c"),
    },
  ],
};

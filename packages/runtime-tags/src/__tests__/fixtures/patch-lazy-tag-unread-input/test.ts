import type { TestConfig } from "../../main.test";

const user = (id: string) => ({
  name: "SHOWN_name" + id,
  passwordHash: "SECRET_hash" + id,
});

// A lazy tag's input: the page writes none of it, rendered or not.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { show: false, user: user("1"), user2: user("1b") },
    { show: true, user: user("2"), user2: user("2b") },
  ],
};

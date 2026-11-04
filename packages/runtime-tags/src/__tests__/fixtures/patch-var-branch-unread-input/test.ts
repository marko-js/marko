import type { TestConfig } from "../../main.test";

const user = (id: string) => ({
  name: "SHOWN_name" + id,
  passwordHash: "SECRET_hash" + id,
});

// A child in a branch returning its input: the page writes only the member
// the branch reads.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, user: user("1"), user2: user("1b") },
    { show: false, user: user("2"), user2: user("2b") },
    { show: true, user: user("3"), user2: user("3b") },
  ],
};

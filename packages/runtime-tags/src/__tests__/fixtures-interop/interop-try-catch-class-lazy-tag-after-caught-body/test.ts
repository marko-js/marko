import type { TestConfig } from "../../main.test";

// A Tags `<try>` catches a body that rendered the Class wrapper first, so the
// wrapper after it is the first to write its lazy child's assets.
export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
};

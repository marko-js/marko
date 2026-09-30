import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  // The HTML parser moves the server's misnested rows out of `<table>`; the
  // client builds them inside.
  skip_settled: true,
  equivalent: false,
  steps: [{}, click(".count")],
};

import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The row's `<script>` changes `n` before the await body streams. The body
// resumes after its owner, in content a patch may create, so it renders `5`.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [{ items: [1] }, flush],
};

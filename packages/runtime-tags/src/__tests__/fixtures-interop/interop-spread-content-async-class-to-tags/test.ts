import type { TestConfig } from "../../main.test";

// Class API `<await>` cannot render in a client rerender, which a CSR run of this body is.
export const config: TestConfig = {
  skip_csr: true,
};

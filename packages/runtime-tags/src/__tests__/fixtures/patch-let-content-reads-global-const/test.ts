import type { TestConfig } from "../../main.test";

const page = (token: string) => ({ $global: { token } });

// For a key no render serializes, content a `<let>` holds reads a `<const>` of it outside
// the content: the server computes it and a patch writes it, reaching the content.
export const config: TestConfig = {
  patches: true,
  steps: [page("secret-1"), page("secret-2"), page("secret-3")],
};

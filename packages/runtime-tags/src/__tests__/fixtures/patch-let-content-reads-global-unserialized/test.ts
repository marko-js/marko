import type { TestConfig } from "../../main.test";

const page = (label: string) => ({ $global: { label } });

// Content a `<let>` holds reads a `$global` key no render serializes: the client's `$global`
// lacks it, as main's does, so the content keeps what it rendered until a full load.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [page("a"), page("b"), page("c")],
};

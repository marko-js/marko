import type { TestConfig } from "../../main.test";

// A `<style/name>` module's classes write as static markup and in shells.
export const config: TestConfig = {
  patches: true,
  skip_csr: true,
  skip_ssr: true,
};

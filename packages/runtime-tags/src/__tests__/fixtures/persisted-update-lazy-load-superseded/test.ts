import type { TestConfig } from "../../main.test";
import { flushIdle, navigate, wait } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

const input = (view: string, label: string) => ({
  $global: { persisted: true, persistedCrossRoute: true, view, label },
});

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    input("home", "initial"),
    clickCount,
    navigate(input("reject", "stale reject")),
    flushIdle,
    navigate(input("home", "after reject")),
    wait,
    clickCount,
    navigate(input("resolve", "stale resolve")),
    flushIdle,
    navigate(input("home", "after resolve")),
    wait,
    clickCount,
  ],
};

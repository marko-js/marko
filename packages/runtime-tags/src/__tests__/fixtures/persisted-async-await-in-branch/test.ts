import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An `<await>` inside a server-driven `<if>`: the branch constructs from
// its shell, then Pending/Child settle the body. Client count survives.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { title: "Store", show: false, promise: Promise.resolve("hi") },
    click,
    { title: "Store", show: true, promise: Promise.resolve("hi") },
    click,
    navigate(() => ({
      title: "Store!",
      show: true,
      promise: resolveAfter("slow"),
    })),
    { title: "Store!", show: false, promise: Promise.resolve("x") },
    click,
    navigate(() => ({
      title: "Open",
      show: true,
      promise: resolveAfter("back"),
    })),
    click,
  ],
};

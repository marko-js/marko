import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const delayed = (value: string) => ({
  then: (onFulfilled: (value: string) => unknown) =>
    new Promise<string>((resolve) => setTimeout(resolve, 10, value)).then(
      onFulfilled,
    ),
});

// An `<await>` inside a server-driven `<if>`: the branch constructs from
// its shell, then Pending/Child settle the body. Client count survives.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { title: "Store", show: false, promise: Promise.resolve("hi") },
    click,
    { title: "Store", show: true, promise: Promise.resolve("hi") },
    click,
    { title: "Store!", show: true, promise: delayed("slow") },
    { title: "Store!", show: false, promise: Promise.resolve("x") },
    click,
    { title: "Open", show: true, promise: delayed("back") },
    click,
  ],
};

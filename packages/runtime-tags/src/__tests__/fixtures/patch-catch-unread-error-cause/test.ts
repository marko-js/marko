import type { TestConfig } from "../../main.test";

class DbSocket {
  fd = () => 1;
}

// An unread caught error with an unserializable `cause` never reaches the patch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { promise: Promise.resolve("ok") },
    {
      promise: new Promise<never>((_, reject) =>
        setTimeout(
          () => reject(new Error("boom", { cause: new DbSocket() })),
          10,
        ),
      ),
    },
  ],
};

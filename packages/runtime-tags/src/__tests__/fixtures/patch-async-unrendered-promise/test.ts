import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter, resolveAfter } from "../../utils/resolve";

const user = (id: string) => ({
  name: "SHOWN_name" + id,
  passwordHash: "SECRET_hash" + id,
});

// Nothing renders the first rejection, so nothing else handles it.
const unrendered = (error: Error, id: number) => {
  const promise = rejectAfter(error, id);
  promise.catch(() => {});
  return promise;
};

// A promise in a branch that does not render: the page neither waits for it
// nor writes it, settled or rejected; a rendered one ships what renders.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    {
      show: false,
      user: resolveAfter(user("1"), 1),
      card: unrendered(
        new Error("SECRET_msg1", { cause: { dsn: "SECRET_dsn1" } }),
        2,
      ),
      tag: "div",
      boxed: resolveAfter(user("1b"), 1),
    },
    navigate(() => ({
      show: true,
      user: resolveAfter(user("2"), 1),
      card: resolveAfter(user("2c"), 2),
      tag: "section",
      boxed: resolveAfter(user("2b"), 1),
    })),
  ],
};

import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A patch whose `<await>` is pending keeps a mounted body in place until the
// resolved body lands; only a boundary the patch creates shows its placeholder.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    {
      title: "Store",
      more: false,
      promise: Promise.resolve("hi"),
      morePromise: Promise.resolve("x"),
    },
    navigate(
      () => ({
        title: "Store!",
        more: true,
        promise: resolveAfter("slow"),
        morePromise: resolveAfter("extra"),
      }),
      () => {},
    ),
  ],
};

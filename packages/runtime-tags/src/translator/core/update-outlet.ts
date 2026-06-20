import type { Tag } from "@marko/compiler/babel-utils";

import runtimeInfo from "../util/runtime-info";
import TryTag from "./try";

// `<update-outlet>` marks the route-content boundary for the single-page server-first
// update system. v1 renders its body as a resumable, replaceable branch by reusing the
// proven `<try>` branch machinery — so reactive content inside hydrates correctly in both
// SSR and CSR, and the branch can be destroyed/recreated to swap route content on a
// navigation. A dedicated stable boundary id and a lean `_outlet` primitive (`<try>`
// without the catch/placeholder cost) are planned follow-ups, gated behind `serverUpdates`.
export default {
  ...(TryTag as Tag),
  autocomplete: [
    {
      description:
        "Marks the route-content boundary for single-page server-first updates.",
    },
  ],
  types: runtimeInfo.name + "/tags/update-outlet.d.marko",
} as Tag;

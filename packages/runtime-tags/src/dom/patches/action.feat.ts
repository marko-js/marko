import { takeDispatched } from "../action.feat";
import { installPatchActs } from "./apply";

const claims = new WeakMap<object, (() => void)[]>();

// A patch takes the acts its dispatch started and those of the patch it replaces.
installPatchActs(
  (prev, next) =>
    claims.set(
      next as object,
      (claims.get(prev as object) || []).concat(takeDispatched()),
    ),
  (stop) =>
    claims
      .get(stop as object)!
      .splice(0)
      .forEach((end) => end()),
);

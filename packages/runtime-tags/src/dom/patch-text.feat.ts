import { type Accessor, PatchKey } from "../common/types";
import { patchers } from "./resume";

declare module "./resume" {
  interface PatchValues {
    [PatchKey.Text]: string;
  }
}

patchers[PatchKey.Text] = (scope, key, value) =>
  ((scope[key.slice(PatchKey.Text.length) as Accessor] as Text).data = value);

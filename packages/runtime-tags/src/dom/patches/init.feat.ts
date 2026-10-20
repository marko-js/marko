import { PatchKey } from "../../common/types";
import { _resumed } from "../resume";
import type { SignalFn } from "../signals";
import { patchers } from "./apply";

// A scope's own entry, not its setup envelope's: the written joins it inits
// where their group mixes, by the ids `_shell_or` registers.
patchers[PatchKey.Init] = (scope, _key, ids) =>
  ids.split(" ").forEach((id) => (_resumed[id] as SignalFn)(scope));

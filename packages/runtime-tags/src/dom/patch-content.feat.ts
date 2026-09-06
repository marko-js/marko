import { CONTENT_REGISTER_ID } from "../common/meta";
import type { Scope } from "../common/types";
import { getShellContent, registerShell, shells } from "./patch-shells";
import { _resume } from "./resume";

// Rebuilds content from an in-band shell record, so resume can dereference
// a static body or boundary content with no template dom module.
_resume(CONTENT_REGISTER_ID, (record: string, owner?: Scope) => {
  const id = registerShell(record);
  return getShellContent(shells[id], id, owner);
});

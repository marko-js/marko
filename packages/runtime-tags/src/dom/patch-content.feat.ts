import { CONTENT_REGISTER_ID } from "../common/meta";
import type { Scope } from "../common/types";
import { getShellContent, registerShell, shells } from "./patch-shells";
import { _resume } from "./resume";

// Rebuilds content from an in-band shell, so resume can dereference
// a static body or boundary content with no template dom module.
_resume(CONTENT_REGISTER_ID, (shell: string, owner?: Scope) => {
  const id = registerShell(shell);
  return getShellContent(shells[id], id, owner);
});

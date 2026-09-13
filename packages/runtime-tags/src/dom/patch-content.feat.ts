import { CONTENT_REGISTER_ID } from "../common/meta";
import type { Scope } from "../common/types";
import { getContent, registerShell } from "./patch-shells";
import { _resume } from "./resume";

// Creates content from an in-band shell, so resume can dereference
// a static body or boundary content with no template dom module.
_resume(CONTENT_REGISTER_ID, (shell: string, owner?: Scope) =>
  getContent(registerShell(shell), owner),
);

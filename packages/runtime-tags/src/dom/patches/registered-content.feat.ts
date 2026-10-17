import { RendererProp, type Scope } from "../../common/types";
import type { Renderer } from "../renderer";
import { _resumed } from "../resume";
import { installPatchShells } from "./apply";
import { registerShell, shells } from "./shells";

// A shell whose content the page registers (it ships no markup) creates from that
// renderer, with the shell's setup and no params: the flush's seeds stand in.
installPatchShells((shell) => {
  const id = registerShell(shell);
  const registered = _resumed[id] as
    | (((owner?: Scope, ...locals: Scope[]) => Renderer) & { _?: unknown })
    | undefined;
  // A template registers itself (its `_`), not a factory, and keeps its markup.
  if (registered && !registered._) {
    const setup = shells[id]()[RendererProp.Setup];
    const props =
      MARKO_DEBUG && shell[0] === "^"
        ? {
            [RendererProp.Setup]: setup,
            [RendererProp.Params]: undefined,
            [RendererProp.Returns]: 1 as const,
          }
        : { [RendererProp.Setup]: setup, [RendererProp.Params]: undefined };
    shells[id] = (owner?: Scope, ...locals: Scope[]) =>
      Object.assign(registered(owner, ...locals), props);
  }
  return id;
});

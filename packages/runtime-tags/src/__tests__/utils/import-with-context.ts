import { readFileSync } from "node:fs";
import vm from "node:vm";

import { type ResolveOptions, resolveSync } from "resolve-sync";

export async function importWithContext<T>(
  entry: string,
  resolveOpts: Omit<ResolveOptions, "from">,
  context: vm.Context,
): Promise<T> {
  vm.createContext(context);
  const cache = new Map<string, Promise<vm.Module>>();
  const root = await load(entry);

  if (root.status === "linked") {
    await root.evaluate();
  }

  return root.namespace as T;

  function load(id: string): Promise<vm.Module> {
    let cached = cache.get(id);
    if (!cached) {
      const mod = new vm.SourceTextModule(readFileSync(id, "utf8"), {
        context,
        identifier: id,
        importModuleDynamically,
      });
      cache.set(id, (cached = mod.link(linker).then(() => mod)));
    }

    return cached;
  }

  async function importModuleDynamically(id: string, parent: vm.Module) {
    const child = await linker(id, parent);

    if (child.status === "unlinked") {
      await child.link(linker);
    }

    if (child.status === "linked") {
      await child.evaluate();
    }

    return child;
  }

  function linker(id: string, parent: vm.Module) {
    const from = parent.identifier;
    const resolved = resolveSync(id, { ...resolveOpts, from });

    if (!resolved) {
      throw new Error(
        `Could not resolve ${JSON.stringify(id)} from ${JSON.stringify(from)}`,
      );
    }

    return load(resolved);
  }
}

import type { Config } from "@marko/compiler";

/** The defaults, with what `configure()` last set over them. */
export let globalConfig: Config & {
  fileSystem: NonNullable<Config["fileSystem"]>;
};

import { Config } from ".";

type Extensions = Partial<typeof require.extensions>;
export default function register(
  config: Config & { extensions?: Extensions }
): Extensions;

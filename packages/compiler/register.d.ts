import { Config } from ".";

type Extensions = typeof require.extensions;
export default function register(
  config: Config & { extensions?: Extensions }
): Extensions;

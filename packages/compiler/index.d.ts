export type Config = {
  output?: "html" | "dom";
  writeVersionComment?: boolean;
  ignoreUnrecognizedTags?: boolean;
  sourceMaps?: boolean;
  translator?: string;
  fileSystem?: typeof import("fs");
  modules?: "esm" | "cjs";
  optimize?: boolean;
  cache: Map<unknown, unknown>;
};

export type MarkoMeta = {
  component?: string;
  watchFiles?: string[];
  tags?: string[];
  deps: Array<
    | string
    | {
        type: string;
        code: string;
        path: string;
        require?: boolean;
        virtualPath?: string;
        [x: string]: unknown;
      }
  >;
};

export type CompileResult = {
  code: string;
  map?: unknown;
  meta: MarkoMeta;
};

export async function compile(
  src: string,
  filename: string,
  config?: Config
): Promise<CompileResult>;

export function compileSync(
  src: string,
  filename: string,
  config?: Config
): CompileResult;

export async function compileFile(
  filename: string,
  config?: Config
): Promise<CompileResult>;

export function compileFileSync(
  filename: string,
  config?: Config
): CompileResult;

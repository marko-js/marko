import bar, { f as foo } from "./bar";
import "./foo";
import baz from "./components/baz.marko";
import { wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable(input => {});

export default _renderer;
export const render = _createRenderFn(_renderer);
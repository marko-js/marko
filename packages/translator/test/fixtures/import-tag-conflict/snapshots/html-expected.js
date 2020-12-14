import { asset as test } from "./test1/asset";
import { asset } from "./test2/asset";
import { wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable(input => {});

export default _renderer;
export const render = _createRenderFn(_renderer);
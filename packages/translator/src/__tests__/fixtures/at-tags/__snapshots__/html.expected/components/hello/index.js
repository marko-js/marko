import { register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/at-tags/components/hello/index.marko", input => {});

export default _renderer;
export const render = _createRenderer(_renderer);
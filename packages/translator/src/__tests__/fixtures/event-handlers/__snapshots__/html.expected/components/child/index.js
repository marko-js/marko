import { dynamicTag as _dynamicTag, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/event-handlers/components/child/index.marko", input => {
  _dynamicTag(input.renderBody, null);
});

export default _renderer;
export const render = _createRenderer(_renderer);
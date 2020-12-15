import _hello from "./hello.marko";
import { wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/custom-tag-template/template.marko", input => {
  _hello({
    name: "Frank"
  });
});

export default _renderer;
export const render = _createRenderer(_renderer);
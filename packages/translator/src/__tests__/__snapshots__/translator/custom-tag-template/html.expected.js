import _hello from "./hello.marko";
import { register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("src/__tests__/fixtures/custom-tag-template/template.marko", input => {
  _hello({
    name: "Frank"
  });
});

export default _renderer;
export const render = _createRenderer(_renderer);
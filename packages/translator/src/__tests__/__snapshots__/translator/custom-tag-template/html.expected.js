import _hello from "./hello.marko";
import { register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";

const _renderer = _register("iWOQOmk3", input => {
  _hello({
    name: "Frank"
  });
});

export default _renderer;
export const render = _createRenderer(_renderer);
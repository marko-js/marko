import { setSource as _setSource, data as _data, derivation as _derivation, source as _source, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _z = /* @__PURE__ */_derivation(3, 1, [], (_scope, y = _scope[2]) => y * 3, (_scope, z) => _data(_scope[0], z));

const _y = /* @__PURE__ */_derivation(2, 1, [_z], (_scope, x = _scope[1]) => x * 2);

const _x = /* @__PURE__ */_source(1, [_y]);

const _setup = _scope => {
  _setSource(_scope, _x, 1);
};

export const template = "<div> </div>";
export const walks =
/* next(1), get, out(1) */
"D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);
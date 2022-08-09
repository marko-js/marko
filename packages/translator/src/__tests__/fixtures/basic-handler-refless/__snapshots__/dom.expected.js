import { setSource as _setSource, queueSource as _queueSource, on as _on, data as _data2, source as _source, register as _register, queueHydrate as _queueHydrate, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _data = _source(2, [], (_scope, data) => _data2(_scope[1], data));

const _temp2 = function (_scope) {
  _queueSource(_scope, _data, 1);
};

const _hydrate_setup = _register("packages/translator/src/__tests__/fixtures/basic-handler-refless/template.marko_0", _scope => _on(_scope[0], "click", _bind(_scope, _temp2)));

const _setup = _scope => {
  _setSource(_scope, _data, 0);

  _queueHydrate(_scope, _hydrate_setup);
};

export const template = "<button> </button>";
export const walks =
/* get, next(1), get, out(1) */
" D l";
export const setup = _setup;
export default _createRenderFn(template, walks, setup);
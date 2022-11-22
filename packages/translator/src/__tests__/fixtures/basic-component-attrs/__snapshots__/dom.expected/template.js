import { setSource as _setSource, queueSource as _queueSource, source as _source, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _myButton, attrs as _myButton_attrs, template as _myButton_template, walks as _myButton_walks } from "./components/my-button.marko";
const _onClick = function (_scope) {
  const clickCount = _scope[0];
  _queueSource(_scope, _clickCount, clickCount + 1);
};
const _clickCount = /* @__PURE__ */_source(0, [_myButton_attrs], (_scope, clickCount) => _setSource(_scope[1], _myButton_attrs, {
  text: clickCount,
  onClick: /* @__PURE__ */_bind(_scope, _onClick)
}));
const _setup = _scope => {
  _setSource(_scope, _clickCount, 0);
  _myButton(_scope[1]);
};
export const template = `${_myButton_template}`;
export const walks = /* beginChild(1), _myButton_walks, endChild */`0${_myButton_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);
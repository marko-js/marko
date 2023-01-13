import { setSource as _setSource, queueSource as _queueSource, data as _data, bindRenderer as _bindRenderer, dynamicSubscribers as _dynamicSubscribers, dynamicClosure as _dynamicClosure, createRenderer as _createRenderer, source as _source, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _myButton, attrs as _myButton_attrs, template as _myButton_template, walks as _myButton_walks } from "./components/my-button.marko";
const _clickCount$myButtonBody = _dynamicClosure(1, 0, [], (_scope, clickCount) => _data(_scope[0], clickCount));
const _myButtonBody = /* @__PURE__ */_createRenderer(" ", /* get */" ", null, [_clickCount$myButtonBody]);
const _clickCount = /* @__PURE__ */_source(0, [_myButton_attrs, _dynamicSubscribers(0)], (_scope, clickCount) => _setSource(_scope[1], _myButton_attrs, {
  onClick: function () {
    const clickCount = _scope[0];
    _queueSource(_scope, _clickCount, clickCount + 1);
  },
  renderBody: /* @__PURE__ */_bindRenderer(_scope, _myButtonBody)
}));
const _setup = _scope => {
  _setSource(_scope, _clickCount, 0);
  _myButton(_scope[1]);
};
export const template = `${_myButton_template}`;
export const walks = /* beginChild(1), _myButton_walks, endChild */`0${_myButton_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);
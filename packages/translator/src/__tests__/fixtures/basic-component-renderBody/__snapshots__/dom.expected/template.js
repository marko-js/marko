import { queueSource as _queueSource, data as _data, bindRenderer as _bindRenderer, inChild as _inChild, dynamicClosure as _dynamicClosure, createRenderer as _createRenderer, dynamicSubscribers as _dynamicSubscribers, value as _value, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/dom";
import { setup as _myButton, attrs as _myButton_attrs, template as _myButton_template, walks as _myButton_walks } from "./components/my-button.marko";
const _clickCount$myButtonBody = /* @__PURE__ */_dynamicClosure("clickCount", (_scope, clickCount) => _data(_scope["#text/0"], clickCount));
const _myButtonBody = /* @__PURE__ */_createRenderer(" ", /* get */" ", void 0, [_clickCount$myButtonBody]);
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => _myButton_attrs(_scope["#childScope/0"], {
  onClick: function () {
    const {
      clickCount
    } = _scope;
    _queueSource(_scope, _clickCount, clickCount + 1);
  },
  renderBody: /* @__PURE__ */_bindRenderer(_scope, _myButtonBody)
}), _dynamicSubscribers("clickCount"), _inChild("#childScope/0", _myButton_attrs));
const _setup = _scope => {
  _myButton(_scope["#childScope/0"]);
  _clickCount(_scope, 0);
};
export const template = `${_myButton_template}`;
export const walks = /* beginChild, _myButton_walks, endChild */`/${_myButton_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator/src/__tests__/fixtures/basic-component-renderBody/template.marko");
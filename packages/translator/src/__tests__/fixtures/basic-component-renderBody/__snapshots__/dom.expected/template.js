import { queueSource as _queueSource, data as _data, bindRenderer as _bindRenderer, dynamicClosure as _dynamicClosure, createRenderer as _createRenderer, dynamicSubscribers as _dynamicSubscribers, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _myButton, attrs as _myButton_attrs, template as _myButton_template, walks as _myButton_walks } from "./components/my-button.marko";
const _clickCount$myButtonBody = /* @__PURE__ */_dynamicClosure("clickCount", (_scope, clickCount) => _data(_scope["#text/0"], clickCount));
const _myButtonBody = /* @__PURE__ */_createRenderer(" ", /* get */" ", null, [_clickCount$myButtonBody]);
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount, _dirty) => {
  let _myButton_attrs_value;
  if (_dirty) {
    _myButton_attrs_value = {
      onClick: function () {
        const clickCount = _scope["clickCount"];
        _queueSource(_scope, _clickCount, clickCount + 1);
      },
      renderBody: /* @__PURE__ */_bindRenderer(_scope, _myButtonBody)
    };
  }
  _myButton_attrs(_scope["#childScope/0"], _myButton_attrs_value, _dirty);
  _dynamicSubscribers(_scope["clickCount*"], _dirty);
});
const _setup = _scope => {
  _myButton(_scope["#childScope/0"]);
  _clickCount(_scope, 0);
};
export const template = `${_myButton_template}`;
export const walks = /* beginChild, _myButton_walks, endChild */`/${_myButton_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/basic-component-renderBody/template.marko");
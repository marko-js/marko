import { queue as _queue, write as _write, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { apply as _myButton, applyAttrs as _myButton_attrs, template as _myButton_template, walks as _myButton_walks } from "./components/my-button.marko";

const _onclick = function (_scope) {
  const clickCount = _scope[0];

  _queue(_scope, _apply_clickCount, 0, clickCount + 1);
};

function _apply_clickCount(_scope, clickCount) {
  if (_write(_scope, 0, clickCount)) {
    _myButton_attrs(_scope[1], {
      text: clickCount,
      onclick: _bind(_scope, _onclick)
    });
  }
}

function _apply(_scope) {
  _apply_clickCount(_scope, 0);

  _myButton(_scope[1]);
}

export const template = `${_myButton_template}`;
export const walks =
/* beginChild(1), _myButton_walks, endChild */
`0${_myButton_walks}&`;
export const apply = _apply;
export default _createRenderFn(template, walks, apply);
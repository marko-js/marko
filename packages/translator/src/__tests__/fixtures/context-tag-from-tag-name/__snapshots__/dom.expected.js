import { write as _write, getInContext as _getInContext, data as _data, createRenderer as _createRenderer, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { apply as _other, applyAttrs as _other_attrs, template as _other_template, walks as _other_walks } from "./components/other.marko";

function _apply1_message(_scope, message) {
  if (_write(_scope, 1, message)) {
    _data(_scope[0], message);
  }
}

const _temp = _scope => {
  _write("<span>");

  const message = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-from-tag-name/components/other.marko");
};

function _apply(_scope) {
  _other(_scope[0]);

  _other_attrs(_scope[0], {
    renderBody: _createRenderer(" </span>",
    /* next(1), get */
    "D ", _bind(_scope, _temp))
  });
}

export const template = `${_other_template}`;
export const walks =
/* beginChild(0), _other_walks, endChild */
`/${_other_walks}&`;
export const apply = _apply;

const _temp2 = _createRenderer(" </span>",
/* next(1), get */
"D ", null);

export default _createRenderFn(template, walks, apply);
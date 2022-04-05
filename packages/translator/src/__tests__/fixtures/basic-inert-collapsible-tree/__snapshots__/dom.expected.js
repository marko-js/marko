import { apply as _comments, applyAttrs as _comments_attrs, template as _comments_template, walks as _comments_walks } from "./components/comments.marko";
import { write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_input(_scope, input) {
  if (_write(_scope, 1, input)) _comments_attrs(_scope[0], input);
}

function _apply(_scope) {
  _comments(_scope[0]);
}

export const applyAttrs = function (_scope, input) {
  _apply_input(_scope, input);
};
export { _apply_input };
export const template = `${_comments_template}`;
export const walks =
/* beginChild(0), _comments_walks, endChild */
`/${_comments_walks}&`;
export const apply = _apply;
export default _createRenderFn(template, walks, apply, applyAttrs);
import { setup as _comments, attrs as _comments_attrs, template as _comments_template, walks as _comments_walks } from "./components/comments.marko";
import { setSource as _setSource, source as _source, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _input = /* @__PURE__ */_source(0, [_comments_attrs], (_scope, input) => _setSource(_scope[1], _comments_attrs, input));

const _setup = _scope => {
  _comments(_scope[1]);
};

export const attrs = /* @__PURE__ */_destructureSources([_input], (_scope, input) => {
  _setSource(_scope, _input, input);
});
export { _input as _apply_input };
export const template = `${_comments_template}`;
export const walks =
/* beginChild(1), _comments_walks, endChild */
`0${_comments_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);
import { setSource as _setSource, attr as _attr, data as _data, on as _on, queueSource as _queueSource, inChild as _inChild, subscriber as _subscriber, inConditionalScope as _inConditionalScope, closure as _closure, createRenderer as _createRenderer, conditional as _conditional, source as _source, register as _register, queueHydrate as _queueHydrate, derivation as _derivation, inLoopScope as _inLoopScope, loop as _loop, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _comments2, attrs as _comments_attrs, template as _comments_template, walks as _comments_walks } from "./comments.marko";
const _expr_comment_id$ifBody = /* @__PURE__ */_subscriber([_inChild(_comments_attrs, 0)], 2, (_scope, comment = _scope._[5], id = _scope._[7]) => _setSource(_scope[0], _comments_attrs, {
  comments: comment.comments,
  path: id
}));
const _id$ifBody = /* @__PURE__ */_closure(1, 7, [_expr_comment_id$ifBody]);
const _comment$ifBody = /* @__PURE__ */_closure(1, 5, [_expr_comment_id$ifBody]);
const _setup$ifBody = _scope => {
  _comments2(_scope[0]);
};
const _ifBody = /* @__PURE__ */_createRenderer(`${_comments_template}`, /* beginChild(0), _comments_walks, endChild */`/${_comments_walks}&`, _setup$ifBody, [_comment$ifBody, _id$ifBody]);
const _if$forBody = /* @__PURE__ */_conditional(4, 1, (_scope, comment = _scope[5]) => comment.comments ? _ifBody : null);
const _hydrate_open$forBody = _register("packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open", _scope => _on(_scope[2], "click", function () {
  const open = _scope[8];
  _queueSource(_scope, _open$forBody, !open);
}));
const _open$forBody = /* @__PURE__ */_source(8, [], (_scope, open) => {
  _attr(_scope[0], "hidden", !open);
  _data(_scope[3], open ? "[-]" : "[+]");
  _queueHydrate(_scope, _hydrate_open$forBody);
});
const _id$forBody = /* @__PURE__ */_derivation(7, 2, [/* @__PURE__ */_inConditionalScope(_id$ifBody, 4)], (_scope, path = _scope._[2], i = _scope[6]) => `${path}-${i}`, (_scope, id) => _attr(_scope[0], "id", id));
const _i$forBody = /* @__PURE__ */_source(6, [_id$forBody]);
const _comment$forBody = /* @__PURE__ */_source(5, [_if$forBody, /* @__PURE__ */_inConditionalScope(_comment$ifBody, 4)], (_scope, comment) => _data(_scope[1], comment.text));
const _path$forBody = /* @__PURE__ */_closure(1, 2, [_id$forBody]);
const _setup$forBody = _scope => {
  _setSource(_scope, _open$forBody, true);
};
const _forBody = /* @__PURE__ */_createRenderer("<li><span> </span><button> </button><!></li>", /* get, next(2), get, out(1), get, next(1), get, out(1), replace */" E l D l%", _setup$forBody, [_path$forBody]);
const _for = /* @__PURE__ */_loop(0, 1, _forBody, [_comment$forBody, _i$forBody], (_scope, [comment, i]) => {
  _setSource(_scope, _comment$forBody, comment);
  _setSource(_scope, _i$forBody, i);
}, (_scope, comments = _scope[1]) => [comments, null]);
const _path = /* @__PURE__ */_source(2, [/* @__PURE__ */_inLoopScope(_path$forBody, 0)]);
const _comments = /* @__PURE__ */_source(1, [_for]);
export const attrs = /* @__PURE__ */_destructureSources([_comments, _path], (_scope, {
  comments,
  path = "c"
}) => {
  _setSource(_scope, _comments, comments);
  _setSource(_scope, _path, path);
});
export { _comments as _apply_comments, _path as _apply_path };
export const template = "<ul></ul>";
export const walks = /* get, over(1) */" b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);
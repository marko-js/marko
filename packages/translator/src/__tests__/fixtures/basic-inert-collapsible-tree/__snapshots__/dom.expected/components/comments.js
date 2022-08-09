import { setSource as _setSource, queueSource as _queueSource, attr as _attr, data as _data, on as _on, subscriber as _subscriber, inConditionalScope as _inConditionalScope, closure as _closure, createRenderer as _createRenderer, conditional as _conditional, source as _source, register as _register, queueHydrate as _queueHydrate, derivation as _derivation, inLoopScope as _inLoopScope, bind as _bind, loop as _loop, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _comments2, attrs as _comments_attrs, template as _comments_template, walks as _comments_walks } from "./comments.marko";

const _expr_comment_id$ifBody = _subscriber([_comments_attrs], 2, (_scope, comment = _scope._[10], id = _scope._[12]) => _setSource(_scope[0], _comments_attrs, {
  comments: comment.comments,
  path: id
}));

const _id$ifBody = _closure(1, 12, [_expr_comment_id$ifBody]);

const _comment$ifBody = _closure(1, 10, [_expr_comment_id$ifBody]);

const _setup$ifBody = _scope => {
  _comments2(_scope[0]);
};

const _ifBody = _createRenderer(`${_comments_template}`,
/* beginChild(0), _comments_walks, endChild */
`/${_comments_walks}&`, _setup$ifBody, [_comment$ifBody, _id$ifBody]);

const _if$forBody = _conditional(4, 1, (_scope, comment = _scope[10]) => comment.comments ? _ifBody : null);

const _onclick = function (_scope) {
  const open = _scope[13];

  _queueSource(_scope, _open$forBody, !open);
};

const _hydrate_open$forBody = _register("packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open", _scope => {
  const open = _scope[13];

  _on(_scope[2], "click", _bind(_scope, _onclick));
});

const _open$forBody = _source(13, [], (_scope, open) => {
  _attr(_scope[0], "hidden", !open);

  _data(_scope[3], open ? "[-]" : "[+]");

  _queueHydrate(_scope, _hydrate_open$forBody);
});

const _id$forBody = _derivation(12, 2, [_inConditionalScope(_id$ifBody, 4)], (_scope, path = _scope._[8], i = _scope[11]) => `${path}-${i}`, (_scope, id) => _attr(_scope[0], "id", id));

const _i$forBody = _source(11, [_id$forBody]);

const _comment$forBody = _source(10, [_if$forBody, _inConditionalScope(_comment$ifBody, 4)], (_scope, comment) => _data(_scope[1], comment.text));

const _path$forBody = _closure(1, 8, [_id$forBody]);

const _setup$forBody = _scope => {
  _setSource(_scope, _open$forBody, true);
};

const _forBody = _createRenderer("<li><span> </span><button> </button><!></li>",
/* get, next(2), get, out(1), get, next(1), get, out(1), replace, skip(5) */
" E l D l%-", _setup$forBody, [_path$forBody]);

const _for = _loop(0, 1, _forBody, [_comment$forBody, _i$forBody], (_scope, [comment, i]) => {
  _setSource(_scope, _comment$forBody, comment);

  _setSource(_scope, _i$forBody, i);
}, (_scope, comments = _scope[7]) => [comments, null]);

const _path = _source(8, [_inLoopScope(_path$forBody, 0)]);

const _comments = _source(7, [_for]);

export const attrs = _destructureSources([_comments, _path], (_scope, {
  comments,
  path = "c"
}) => {
  _setSource(_scope, _comments, comments);

  _setSource(_scope, _path, path);
});
export { _comments as _apply_comments, _path as _apply_path };
export const template = "<ul></ul>";
export const walks =
/* get, skip(6), over(1) */
" .b";
export const setup = function () {};
export default _createRenderFn(template, walks, setup, attrs);
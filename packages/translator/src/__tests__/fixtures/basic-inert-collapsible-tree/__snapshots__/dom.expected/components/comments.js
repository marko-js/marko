import { attr as _attr, data as _data, on as _on, queueSource as _queueSource, inChild as _inChild, intersection as _intersection, closure as _closure, createRenderer as _createRenderer, register as _register, conditional as _conditional, queueEffect as _queueEffect, value as _value, inConditionalScope as _inConditionalScope, loopOf as _loopOf, inLoopScope as _inLoopScope, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _comments2, attrs as _comments_attrs, template as _comments_template, walks as _comments_walks } from "./comments.marko";
const _expr_comment_id$ifBody = /* @__PURE__ */_intersection(2, _scope => {
  const {
    _: {
      comment,
      id
    }
  } = _scope;
  _comments_attrs(_scope["#childScope/0"], {
    comments: comment.comments,
    path: id
  });
});
const _id$ifBody = /* @__PURE__ */_closure("id", null, void 0, _expr_comment_id$ifBody);
const _comment$ifBody = /* @__PURE__ */_closure("comment", null, void 0, _expr_comment_id$ifBody);
const _setup$ifBody = _scope => {
  _comments2(_scope["#childScope/0"]);
};
const _ifBody = _register("packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer", /* @__PURE__ */_createRenderer(`${_comments_template}`, /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`, _setup$ifBody, [_comment$ifBody, _id$ifBody]));
const _expr_path_i$forBody = /* @__PURE__ */_intersection(2, _scope => {
  const {
    _: {
      path
    },
    i
  } = _scope;
  _id$forBody(_scope, `${path}-${i}`);
});
const _if$forBody = /* @__PURE__ */_conditional("#text/4");
const _open$forBody_effect = _register("packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open", _scope => _on(_scope["#button/2"], "click", function () {
  const {
    open
  } = _scope;
  _queueSource(_scope, _open$forBody, !open);
}));
const _open$forBody = /* @__PURE__ */_value("open", (_scope, open) => {
  _attr(_scope["#li/0"], "hidden", !open);
  _data(_scope["#text/3"], open ? "[-]" : "[+]");
  _queueEffect(_scope, _open$forBody_effect);
});
const _id$forBody = /* @__PURE__ */_value("id", (_scope, id) => _attr(_scope["#li/0"], "id", id), _inConditionalScope(_id$ifBody, "#text/4"));
const _i$forBody = /* @__PURE__ */_value("i", null, _expr_path_i$forBody);
const _comment$forBody = /* @__PURE__ */_value("comment", (_scope, comment) => {
  _data(_scope["#text/1"], comment.text);
  _if$forBody(_scope, comment.comments ? _ifBody : null);
}, _inConditionalScope(_comment$ifBody, "#text/4"), _if$forBody);
const _path$forBody = /* @__PURE__ */_closure("path", null, void 0, _expr_path_i$forBody);
const _setup$forBody = _scope => {
  _open$forBody(_scope, true);
};
const _forBody = /* @__PURE__ */_createRenderer("<li><span> </span><button> </button><!></li>", /* get, next(2), get, out(1), get, next(1), get, out(1), replace */" E l D l%", _setup$forBody, [_path$forBody], void 0, void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let comment, i;
  if (!_clean) ({
    value: [comment, i]
  } = _destructure);
  _comment$forBody(_scope, comment, _clean);
  _i$forBody(_scope, i, _clean);
});
const _for = /* @__PURE__ */_loopOf("#ul/0", _forBody);
const _path = /* @__PURE__ */_value("path", null, _inLoopScope(_path$forBody, "#ul/0"));
const _comments = /* @__PURE__ */_value("comments", (_scope, comments) => _for(_scope, [comments]), void 0, _for);
export const attrs = (_scope, _destructure2, _clean) => {
  let comments, path;
  if (!_clean) ({
    comments,
    path = "c"
  } = _destructure2);
  _comments(_scope, comments, _clean);
  _path(_scope, path, _clean);
};
export { _comments, _path };
export const template = "<ul></ul>";
export const walks = /* get, over(1) */" b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, void 0, "packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko");
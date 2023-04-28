import { attr as _attr, data as _data, on as _on, queueSource as _queueSource, intersection as _intersection, closure as _closure, createRenderer as _createRenderer, register as _register, conditional as _conditional, queueEffect as _queueEffect, value as _value, inConditionalScope as _inConditionalScope, loop as _loop, inLoopScope as _inLoopScope, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _comments2, attrs as _comments_attrs, template as _comments_template, walks as _comments_walks } from "./comments.marko";
const _expr_comment_id$ifBody = /* @__PURE__ */_intersection(2, (_scope, _dirty) => {
  let _comments_attrs_value;
  if (_dirty) {
    const {
      _: {
        comment,
        id
      }
    } = _scope;
    _comments_attrs_value = {
      comments: comment.comments,
      path: id
    };
  }
  _comments_attrs(_scope["#childScope/0"], _comments_attrs_value, _dirty);
});
const _id$ifBody = /* @__PURE__ */_closure("id", (_scope, id, _dirty) => _expr_comment_id$ifBody(_scope, _dirty));
const _comment$ifBody = /* @__PURE__ */_closure("comment", (_scope, comment, _dirty) => _expr_comment_id$ifBody(_scope, _dirty));
const _setup$ifBody = _scope => {
  _comments2(_scope["#childScope/0"]);
};
const _ifBody = _register("packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer", /* @__PURE__ */_createRenderer(`${_comments_template}`, /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`, _setup$ifBody, [_comment$ifBody, _id$ifBody]));
const _expr_path_i$forBody = /* @__PURE__ */_intersection(2, (_scope, _dirty) => {
  let _id$forBody_value;
  if (_dirty) {
    const {
      _: {
        path
      },
      i
    } = _scope;
    _id$forBody_value = `${path}-${i}`;
  }
  _id$forBody(_scope, _id$forBody_value, _dirty);
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
const _id$forBody = /* @__PURE__ */_value("id", (_scope, id, _dirty) => {
  if (_dirty) {
    _attr(_scope["#li/0"], "id", id);
  }
  _inConditionalScope(_scope, _dirty, _id$ifBody, "#text/4");
});
const _i$forBody = /* @__PURE__ */_value("i", (_scope, i, _dirty) => _expr_path_i$forBody(_scope, _dirty));
const _comment$forBody = /* @__PURE__ */_value("comment", (_scope, comment, _dirty) => {
  let _if$forBody_value;
  if (_dirty) {
    _data(_scope["#text/1"], comment.text);
    _if$forBody_value = comment.comments ? _ifBody : null;
  }
  _if$forBody(_scope, _if$forBody_value, _dirty);
  _inConditionalScope(_scope, _dirty, _comment$ifBody, "#text/4");
});
const _path$forBody = /* @__PURE__ */_closure("path", (_scope, path, _dirty) => _expr_path_i$forBody(_scope, _dirty));
const _setup$forBody = _scope => {
  _open$forBody(_scope, true);
};
const _forBody = /* @__PURE__ */_createRenderer("<li><span> </span><button> </button><!></li>", /* get, next(2), get, out(1), get, next(1), get, out(1), replace */" E l D l%", _setup$forBody, [_path$forBody]);
const _for = /* @__PURE__ */_loop("#ul/0", _forBody, (_scope, _destructure, _dirty = true) => {
  let comment, i;
  if (_dirty) [comment, i] = _destructure;
  _comment$forBody(_scope, comment, _dirty);
  _i$forBody(_scope, i, _dirty);
});
const _path = /* @__PURE__ */_value("path", (_scope, path, _dirty) => _inLoopScope(_scope, _dirty, _path$forBody, "#ul/0"));
const _comments = /* @__PURE__ */_value("comments", (_scope, comments, _dirty) => {
  let _for_value;
  if (_dirty) {
    _for_value = [comments, null];
  }
  _for(_scope, _for_value, _dirty);
});
export const attrs = (_scope, _destructure2, _dirty = true) => {
  let comments, path;
  if (_dirty) ({
    comments,
    path = "c"
  } = _destructure2);
  _comments(_scope, comments, _dirty);
  _path(_scope, path, _dirty);
};
export { _comments, _path };
export const template = "<ul></ul>";
export const walks = /* get, over(1) */" b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko");
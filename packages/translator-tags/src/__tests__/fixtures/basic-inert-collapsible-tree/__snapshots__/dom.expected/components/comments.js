import { attr as _attr, data as _data, on as _on, queueSource as _queueSource, inChild as _inChild, intersection as _intersection, closure as _closure, createRenderer as _createRenderer, register as _register, conditional as _conditional, queueEffect as _queueEffect, value as _value, inConditionalScope as _inConditionalScope, loopOf as _loopOf, inLoopScope as _inLoopScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _setup_ as _comments, _args_ as _comments_args, _template_ as _comments_template, _walks_ as _comments_walks } from "./comments.marko";
const _expr_comment_id$ifBody = /* @__PURE__ */_intersection(2, _scope => {
  const {
    _: {
      comment,
      id
    }
  } = _scope;
  _comments_args(_scope["#childScope/0"], [{
    comments: comment.comments,
    path: id
  }]);
});
const _id$ifBody = /* @__PURE__ */_closure("id", null, void 0, _expr_comment_id$ifBody);
const _comment$ifBody = /* @__PURE__ */_closure("comment", null, void 0, _expr_comment_id$ifBody);
const _setup$ifBody = _scope => {
  _comments(_scope["#childScope/0"]);
};
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer", /* @__PURE__ */_createRenderer(`${_comments_template}`, /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`, _setup$ifBody, [_comment$ifBody, _id$ifBody]));
const _expr_input_i$forBody = /* @__PURE__ */_intersection(2, _scope => {
  const {
    _: {
      input
    },
    i
  } = _scope;
  _id$forBody(_scope, `${input.path || "c"}-${i}`);
});
const _if$forBody = /* @__PURE__ */_conditional("#text/4");
const _open$forBody_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open", _scope => _on(_scope["#button/2"], "click", function () {
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
const _i$forBody = /* @__PURE__ */_value("i", null, _expr_input_i$forBody);
const _comment$forBody = /* @__PURE__ */_value("comment", (_scope, comment) => {
  _data(_scope["#text/1"], comment.text);
  _if$forBody(_scope, comment.comments ? _ifBody : null);
}, _inConditionalScope(_comment$ifBody, "#text/4"), _if$forBody);
const _input$forBody = /* @__PURE__ */_closure("input", null, void 0, _expr_input_i$forBody);
const _setup$forBody = _scope => {
  _open$forBody(_scope, true);
};
const _forBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_renderer", /* @__PURE__ */_createRenderer("<li><span> </span><button> </button><!></li>", /* get, next(2), get, out(1), get, next(1), get, out(1), replace */" E l D l%", _setup$forBody, [_input$forBody], void 0, (_scope, _destructure, _clean) => {
  let comment, i;
  if (!_clean) [comment, i] = _destructure;
  _comment$forBody(_scope, comment, _clean);
  _i$forBody(_scope, i, _clean);
}));
const _for = /* @__PURE__ */_loopOf("#ul/0", _forBody);
const _input = /* @__PURE__ */_value("input", (_scope, input) => _for(_scope, [input.comments]), _inLoopScope(_input$forBody, "#ul/0"), _for);
export const _args_ = (_scope, _destructure2, _clean) => {
  let input;
  if (!_clean) [input] = _destructure2;
  _input(_scope, input, _clean);
};
export const _template_ = "<ul></ul>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _args_), "packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko");
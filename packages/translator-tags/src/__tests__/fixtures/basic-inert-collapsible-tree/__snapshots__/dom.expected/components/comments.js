export const _template_ = "<ul></ul>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import { attr as _attr, data as _data, on as _on, inChild as _inChild, queueSource as _queueSource, createRenderer as _createRenderer, intersection as _intersection, closure as _closure, register as _register, conditional as _conditional, queueEffect as _queueEffect, value as _value, inConditionalScope as _inConditionalScope, intersections as _intersections, loopOf as _loopOf, inLoopScope as _inLoopScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _template_ as _comments_template, _walks_ as _comments_walks } from "./comments.marko";
const _expr_comment_id$ifBody = /* @__PURE__ */_intersection(2, _scope => {
  const {
    _: {
      comment,
      id
    }
  } = _scope;
  _input_(_scope["#childScope/0"], {
    comments: comment.comments,
    path: id
  });
}, () => _inChild("#childScope/0", _input_));
const _id$ifBody = /* @__PURE__ */_closure("id", null, void 0, () => _expr_comment_id$ifBody);
const _comment$ifBody = /* @__PURE__ */_closure("comment", null, void 0, () => _expr_comment_id$ifBody);
const _setup$ifBody = _scope => {
  _setup_(_scope["#childScope/0"]);
};
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer", /* @__PURE__ */_createRenderer(`${_comments_template}`, /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`, _setup$ifBody, () => [_comment$ifBody, _id$ifBody]));
const _expr_input_i$forBody = /* @__PURE__ */_intersection(2, _scope => {
  const {
    _: {
      input
    },
    i
  } = _scope;
  _id$forBody(_scope, `${input.path || "c"}-${i}`);
}, () => _id$forBody);
const _if$forBody = /* @__PURE__ */_conditional("#text/4");
const _onClick = _scope => {
  const {
    open
  } = _scope;
  return function () {
    _queueSource(_scope, _open$forBody, !open);
  };
};
const _open$forBody_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open", _scope => _on(_scope["#button/2"], "click", _onClick(_scope)));
const _open$forBody = /* @__PURE__ */_value("open", (_scope, open) => {
  _attr(_scope["#li/0"], "hidden", !open);
  _data(_scope["#text/3"], open ? "[-]" : "[+]");
  _queueEffect(_scope, _open$forBody_effect);
});
const _id$forBody = /* @__PURE__ */_value("id", (_scope, id) => _attr(_scope["#li/0"], "id", id), () => _inConditionalScope(_id$ifBody, "#text/4"));
const _i$forBody = /* @__PURE__ */_value("i", null, () => _expr_input_i$forBody);
const _comment$forBody = /* @__PURE__ */_value("comment", (_scope, comment) => {
  _data(_scope["#text/1"], comment.text);
  _if$forBody(_scope, comment.comments ? _ifBody : null);
}, () => _intersections([_if$forBody, _inConditionalScope(_comment$ifBody, "#text/4")]));
const _params_2$forBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => {
  _comment$forBody(_scope, _params_2[0]);
  _i$forBody(_scope, _params_2[1]);
}, () => _intersections([_comment$forBody, _i$forBody]));
const _input$forBody = /* @__PURE__ */_closure("input", null, void 0, () => _expr_input_i$forBody);
const _setup$forBody = _scope => {
  _open$forBody(_scope, true);
};
const _forBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_renderer", /* @__PURE__ */_createRenderer("<li><span> </span><button> </button><!></li>", /* get, next(2), get, out(1), get, next(1), get, out(1), replace */" E l D l%", _setup$forBody, () => [_input$forBody], void 0, () => _params_2$forBody));
const _for = /* @__PURE__ */_loopOf("#ul/0", _forBody);
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _for(_scope, [input.comments]), () => _intersections([_for, _inLoopScope(_input$forBody, "#ul/0")]));
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko");
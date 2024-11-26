export const _template_ = "<ul></ul>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _template_ as _comments_template, _walks_ as _comments_walks } from "./comments.marko";
const _expr_comment_id$ifBody = /* @__PURE__ */_$.intersection(2, _scope => {
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
}, () => _$.inChild("#childScope/0", _input_));
const _id$ifBody = /* @__PURE__ */_$.closure("id", 0, void 0, () => _expr_comment_id$ifBody);
const _comment$ifBody = /* @__PURE__ */_$.closure("comment", 0, void 0, () => _expr_comment_id$ifBody);
const _setup$ifBody = _scope => {
  _setup_(_scope["#childScope/0"]);
};
const _ifBody = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer", /* @__PURE__ */_$.createRenderer(`${_comments_template}`, /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`, _setup$ifBody, () => [_id$ifBody, _comment$ifBody]));
const _expr_input_i$forBody = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _: {
      input
    },
    i
  } = _scope;
  _id$forBody(_scope, `${input.path || "c"}-${i}`);
}, () => _id$forBody);
const _if$forBody = /* @__PURE__ */_$.conditional("#text/4", 0);
const _onClick = _scope => {
  const {
    open
  } = _scope;
  return function () {
    _open$forBody(_scope, !open);
  };
};
const _open$forBody_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open", _scope => _$.on(_scope["#button/2"], "click", _onClick(_scope)));
const _open$forBody = /* @__PURE__ */_$.state("open", (_scope, open) => {
  _$.attr(_scope["#li/0"], "hidden", !open);
  _$.data(_scope["#text/3"], open ? "[-]" : "[+]");
  _open$forBody_effect(_scope);
});
const _id$forBody = /* @__PURE__ */_$.value("id", (_scope, id) => _$.attr(_scope["#li/0"], "id", id), () => _$.inConditionalScope(_id$ifBody, "#text/4"));
const _i$forBody = /* @__PURE__ */_$.value("i", 0, () => _expr_input_i$forBody);
const _comment$forBody = /* @__PURE__ */_$.value("comment", (_scope, comment) => {
  _$.data(_scope["#text/1"], comment.text);
  _if$forBody(_scope, comment.comments ? _ifBody : null);
}, () => _$.intersections([_if$forBody, _$.inConditionalScope(_comment$ifBody, "#text/4")]));
const _params_2$forBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => {
  _comment$forBody(_scope, _params_2[0]);
  _i$forBody(_scope, _params_2[1]);
}, () => _$.intersections([_comment$forBody, _i$forBody]));
const _input$forBody = /* @__PURE__ */_$.closure("input", 0, void 0, () => _expr_input_i$forBody);
const _setup$forBody = _scope => {
  _open$forBody(_scope, true);
};
const _forBody = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<li><span> </span><button> </button><!></li>", /* get, next(2), get, out(1), get, next(1), get, out(1), replace */" E l D l%", _setup$forBody, () => [_input$forBody], () => _params_2$forBody));
const _for = /* @__PURE__ */_$.loopOf("#ul/0", _forBody);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _for(_scope, [input.comments]), () => _$.intersections([_for, _$.inLoopScope(_input$forBody, "#ul/0")]));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko", _template_, _walks_, _setup_, void 0, () => _params__);
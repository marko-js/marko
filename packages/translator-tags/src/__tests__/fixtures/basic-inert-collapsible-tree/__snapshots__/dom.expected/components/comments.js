export const _template_ = "<ul></ul>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _template_ as _comments_template, _walks_ as _comments_walks } from "./comments.marko";
const _expr_comment_comments_id$ifBody = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _: {
      comment_comments,
      id
    }
  } = _scope;
  _input_(_scope["#childScope/0"], {
    comments: comment_comments,
    path: id
  });
}, () => _$.inChild("#childScope/0", _input_));
const _id$ifBody = /* @__PURE__ */_$.closure("id", 0, void 0, () => _expr_comment_comments_id$ifBody);
const _comment_comments$ifBody = /* @__PURE__ */_$.closure("comment_comments", 0, void 0, () => _expr_comment_comments_id$ifBody);
const _setup$ifBody = _scope => {
  _setup_(_scope["#childScope/0"]);
};
const _ifBody = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer", /* @__PURE__ */_$.createRenderer(`${_comments_template}`, /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`, _setup$ifBody, () => [_id$ifBody, _comment_comments$ifBody]));
const _expr_input_path_i$forBody = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _: {
      input_path
    },
    i
  } = _scope;
  _id$forBody(_scope, `${input_path || "c"}-${i}`);
}, () => _id$forBody);
const _if$forBody = /* @__PURE__ */_$.conditional("#text/4", 0);
const _open$forBody_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open", (_scope, {
  open
}) => _$.on(_scope["#button/2"], "click", function () {
  _open$forBody(_scope, !open);
}));
const _open$forBody = /* @__PURE__ */_$.state("open", (_scope, open) => {
  _$.attr(_scope["#li/0"], "hidden", !open);
  _$.data(_scope["#text/3"], open ? "[-]" : "[+]");
  _open$forBody_effect(_scope);
});
const _id$forBody = /* @__PURE__ */_$.value("id", (_scope, id) => _$.attr(_scope["#li/0"], "id", id), () => _$.inConditionalScope(_id$ifBody, "#text/4"));
const _i$forBody = /* @__PURE__ */_$.value("i", 0, () => _expr_input_path_i$forBody);
const _comment_comments$forBody = /* @__PURE__ */_$.value("comment_comments", (_scope, comment_comments) => _if$forBody(_scope, comment_comments ? _ifBody : null), () => _$.intersections([_if$forBody, _$.inConditionalScope(_comment_comments$ifBody, "#text/4")]));
const _comment_text$forBody = /* @__PURE__ */_$.value("comment_text", (_scope, comment_text) => _$.data(_scope["#text/1"], comment_text));
const _comment$forBody = /* @__PURE__ */_$.value("comment", (_scope, comment) => {
  _comment_text$forBody(_scope, comment?.text);
  _comment_comments$forBody(_scope, comment?.comments);
}, () => _comment_comments$forBody);
const _params_2$forBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => {
  _comment$forBody(_scope, _params_2[0]);
  _i$forBody(_scope, _params_2[1]);
}, () => _$.intersections([_comment$forBody, _i$forBody]));
const _input_path$forBody = /* @__PURE__ */_$.closure("input_path", 0, void 0, () => _expr_input_path_i$forBody);
const _setup$forBody = _scope => {
  _open$forBody(_scope, true);
};
const _forBody = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<li><span> </span><button> </button><!></li>", /* get, next(2), get, out(1), get, next(1), get, out(1), replace */" E l D l%", _setup$forBody, () => [_input_path$forBody], () => _params_2$forBody));
const _for = /* @__PURE__ */_$.loopOf("#ul/0", _forBody);
export const _input_path_ = /* @__PURE__ */_$.value("input_path", 0, () => _$.inLoopScope(_input_path$forBody, "#ul/0"));
export const _input_comments_ = /* @__PURE__ */_$.value("input_comments", (_scope, input_comments) => _for(_scope, [input_comments]), () => _for);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_comments_(_scope, input.comments);
  _input_path_(_scope, input.path);
}, () => _$.intersections([_input_comments_, _input_path_]));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko", _template_, _walks_, _setup_, void 0, () => _params__);
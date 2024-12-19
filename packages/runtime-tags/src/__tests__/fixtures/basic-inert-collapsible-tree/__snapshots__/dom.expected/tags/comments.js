export const _template_ = "<ul></ul>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _template_ as _comments_template, _walks_ as _comments_walks } from "./comments.marko";
const _expr_comment_comments_id$if_content = /* @__PURE__ */_$.intersection(2, _scope => {
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
const _id$if_content = /* @__PURE__ */_$.closure("id", 0, void 0, () => _expr_comment_comments_id$if_content);
const _comment_comments$if_content = /* @__PURE__ */_$.closure("comment_comments", 0, void 0, () => _expr_comment_comments_id$if_content);
const _setup$if_content = _scope => {
  _setup_(_scope["#childScope/0"]);
};
const _if_content = _$.register("__tests__/tags/comments.marko_2_renderer", /* @__PURE__ */_$.createRenderer(_comments_template, /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`, _setup$if_content, () => [_id$if_content, _comment_comments$if_content]));
const _expr_input_path_i$for_content = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _: {
      input_path
    },
    i
  } = _scope;
  _id$for_content(_scope, `${input_path || "c"}-${i}`);
}, () => _id$for_content);
const _if$for_content = /* @__PURE__ */_$.conditional("#text/4", 0);
const _open$for_content_effect = _$.effect("__tests__/tags/comments.marko_1_open", (_scope, {
  open
}) => _$.on(_scope["#button/2"], "click", function () {
  _open$for_content(_scope, !open);
}));
const _open$for_content = /* @__PURE__ */_$.state("open", (_scope, open) => {
  _$.attr(_scope["#li/0"], "hidden", !open);
  _$.data(_scope["#text/3"], open ? "[-]" : "[+]");
  _open$for_content_effect(_scope);
});
const _id$for_content = /* @__PURE__ */_$.value("id", (_scope, id) => _$.attr(_scope["#li/0"], "id", id), () => _$.inConditionalScope(_id$if_content, "#text/4"));
const _i$for_content = /* @__PURE__ */_$.value("i", 0, () => _expr_input_path_i$for_content);
const _comment_comments$for_content = /* @__PURE__ */_$.value("comment_comments", (_scope, comment_comments) => _if$for_content(_scope, comment_comments ? _if_content : null), () => _$.intersections([_if$for_content, _$.inConditionalScope(_comment_comments$if_content, "#text/4")]));
const _comment_text$for_content = /* @__PURE__ */_$.value("comment_text", (_scope, comment_text) => _$.data(_scope["#text/1"], comment_text));
const _comment$for_content = /* @__PURE__ */_$.value("comment", (_scope, comment) => {
  _comment_text$for_content(_scope, comment?.text);
  _comment_comments$for_content(_scope, comment?.comments);
}, () => _comment_comments$for_content);
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => {
  _comment$for_content(_scope, _params_2[0]);
  _i$for_content(_scope, _params_2[1]);
}, () => _$.intersections([_comment$for_content, _i$for_content]));
const _input_path$for_content = /* @__PURE__ */_$.closure("input_path", 0, void 0, () => _expr_input_path_i$for_content);
const _setup$for_content = _scope => {
  _open$for_content(_scope, true);
};
const _for_content = _$.register("__tests__/tags/comments.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<li><span> </span><button> </button><!></li>", /* get, next(2), get, out(1), get, next(1), get, out(1), replace */" E l D l%", _setup$for_content, () => [_input_path$for_content], () => _params_2$for_content));
const _for = /* @__PURE__ */_$.loopOf("#ul/0", _for_content);
export const _input_path_ = /* @__PURE__ */_$.value("input_path", 0, () => _$.inLoopScope(_input_path$for_content, "#ul/0"));
export const _input_comments_ = /* @__PURE__ */_$.value("input_comments", (_scope, input_comments) => _for(_scope, [input_comments]), () => _for);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_comments_(_scope, input.comments);
  _input_path_(_scope, input.path);
}, () => _$.intersections([_input_comments_, _input_path_]));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/comments.marko", _template_, _walks_, _setup_, void 0, () => _params__);
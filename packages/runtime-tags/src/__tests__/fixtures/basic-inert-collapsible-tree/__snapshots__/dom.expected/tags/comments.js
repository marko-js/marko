export const _template = "<ul></ul>";
export const _walks = /* get, over(1) */" b";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _template as _comments_template, _walks as _comments_walks } from "./comments.marko";
const _expr_comment_comments_id$if_content = /* @__PURE__ */_$.intersection(1, _scope => {
  const {
    _: {
      comment_comments,
      id
    }
  } = _scope;
  _input(_scope["#childScope/0"], {
    comments: comment_comments,
    path: id
  });
});
const _id$if_content = /* @__PURE__ */_$.conditionalClosure("id", "#text/4", 0, _scope => _expr_comment_comments_id$if_content(_scope));
const _comment_comments$if_content = /* @__PURE__ */_$.conditionalClosure("comment_comments", "#text/4", 0, _scope => _expr_comment_comments_id$if_content(_scope));
const _setup$if_content = _scope => {
  _setup(_scope["#childScope/0"]);
};
const _if_content = /* @__PURE__ */_$.createRenderer(_comments_template, /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`, _setup$if_content, 0, _scope => {
  _comment_comments$if_content._(_scope);
  _id$if_content._(_scope);
});
const _expr_input_path_i$for_content = /* @__PURE__ */_$.intersection(10, _scope => {
  const {
    _: {
      input_path
    },
    i
  } = _scope;
  _id$for_content(_scope, `${input_path || "c"}-${i}`);
});
const _if$for_content = /* @__PURE__ */_$.conditional("#text/4", _if_content);
const _open$for_content_effect = _$.effect("__tests__/tags/comments.marko_1_open", (_scope, {
  open
}) => _$.on(_scope["#button/2"], "click", function () {
  _open$for_content(_scope, !open);
}));
const _open$for_content = /* @__PURE__ */_$.state("open/12", (_scope, open) => {
  _$.attr(_scope["#li/0"], "hidden", !open);
  _$.data(_scope["#text/3"], open ? "[-]" : "[+]");
  _open$for_content_effect(_scope);
});
const _id$for_content = /* @__PURE__ */_$.value("id", (_scope, id) => {
  _$.attr(_scope["#li/0"], "id", id);
  _id$if_content(_scope);
});
const _i$for_content = /* @__PURE__ */_$.value("i", _scope => _expr_input_path_i$for_content(_scope));
const _comment_comments$for_content = /* @__PURE__ */_$.value("comment_comments", (_scope, comment_comments) => {
  _if$for_content(_scope, comment_comments ? 0 : 1);
  _comment_comments$if_content(_scope);
});
const _comment_text$for_content = /* @__PURE__ */_$.value("comment_text", (_scope, comment_text) => _$.data(_scope["#text/1"], comment_text));
const _comment$for_content = /* @__PURE__ */_$.value("comment", (_scope, comment) => {
  _comment_text$for_content(_scope, comment?.text);
  _comment_comments$for_content(_scope, comment?.comments);
});
const _params2$for_content = /* @__PURE__ */_$.value("_params2", (_scope, _params2) => {
  _comment$for_content(_scope, _params2[0]);
  _i$for_content(_scope, _params2[1]);
});
const _input_path$for_content = /* @__PURE__ */_$.loopClosure("input_path", "#ul/0", _scope => _expr_input_path_i$for_content(_scope));
const _setup$for_content = _scope => {
  _open$for_content(_scope, true);
};
const _for_content = /* @__PURE__ */_$.createRenderer("<li><span> </span><button> </button><!></li>", /* get, next(2), get, out(1), get, next(1), get, out(1), replace */" E l D l%", _setup$for_content, _params2$for_content, _scope => _input_path$for_content._(_scope));
const _for = /* @__PURE__ */_$.loopOf("#ul/0", _for_content);
export const _input_path = /* @__PURE__ */_$.value("input_path", _scope => _input_path$for_content(_scope));
export const _input_comments = /* @__PURE__ */_$.value("input_comments", (_scope, input_comments) => _for(_scope, [input_comments]));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_comments(_scope, input.comments);
  _input_path(_scope, input.path);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/comments.marko", _template, _walks, _setup, _input);
// size: 921 (min) 460 (brotli)
const _expr_comment_comments_id$if_content = intersection(1, (_scope) => {
    const {
      _: { 8: comment_comments, 11: id },
    } = _scope;
    _input$1(_scope[0], { comments: comment_comments, path: id });
  }),
  _id$if_content = conditionalClosure(
    11,
    4,
    0,
    _expr_comment_comments_id$if_content,
  ),
  _comment_comments$if_content = conditionalClosure(
    8,
    4,
    0,
    _expr_comment_comments_id$if_content,
  ),
  _if_content = createRenderer(
    "<ul></ul>",
    "/ b&",
    (_scope) => {
      _scope[0];
    },
    0,
    (_scope) => {
      _comment_comments$if_content._(_scope), _id$if_content._(_scope);
    },
  ),
  _expr_input_path_i$for_content = intersection(10, (_scope) => {
    const {
      _: { 4: input_path },
      9: i,
    } = _scope;
    _id$for_content(_scope, `${input_path || "c"}-${i}`);
  }),
  _if$for_content = conditional(4, _if_content),
  _open$for_content_effect = effect("a0", (_scope, { 12: open }) =>
    on(_scope[2], "click", function () {
      _open$for_content(_scope, !open);
    }),
  ),
  _open$for_content = state(12, (_scope, open) => {
    attr(_scope[0], "hidden", !open),
      data(_scope[3], open ? "[-]" : "[+]"),
      _open$for_content_effect(_scope);
  }),
  _id$for_content = value(11, (_scope, id) => {
    attr(_scope[0], "id", id), _id$if_content(_scope);
  }),
  _i$for_content = value(9, _expr_input_path_i$for_content),
  _comment_comments$for_content = value(8, (_scope, comment_comments) => {
    _if$for_content(_scope, comment_comments ? 0 : 1),
      _comment_comments$if_content(_scope);
  }),
  _comment_text$for_content = value(7, (_scope, comment_text) =>
    data(_scope[1], comment_text),
  ),
  _comment$for_content = value(6, (_scope, comment) => {
    _comment_text$for_content(_scope, comment?.text),
      _comment_comments$for_content(_scope, comment?.comments);
  }),
  _params2$for_content = value(5, (_scope, _params2) => {
    _comment$for_content(_scope, _params2[0]),
      _i$for_content(_scope, _params2[1]);
  }),
  _input_path$for_content = loopClosure(4, 0, _expr_input_path_i$for_content),
  _for = loopOf(
    0,
    createRenderer(
      "<li><span> </span><button> </button><!></li>",
      " E l D l%",
      (_scope) => {
        _open$for_content(_scope, !0);
      },
      _params2$for_content,
      (_scope) => _input_path$for_content._(_scope),
    ),
  ),
  _input_path = value(4, _input_path$for_content),
  _input_comments = value(3, (_scope, input_comments) =>
    _for(_scope, [input_comments]),
  ),
  _input$1 = value(2, (_scope, input) => {
    _input_comments(_scope, input.comments), _input_path(_scope, input.path);
  });
function _setup(_scope) {
  _scope[0];
}
createTemplate(
  "b",
  "<ul></ul>",
  "/ b&",
  _setup,
  value(2, (_scope, input) => {
    const _comments_input_spread = input;
    _input_comments(_scope[0], _comments_input_spread.comments),
      _input_path(_scope[0], _comments_input_spread.path);
  }),
).mount();

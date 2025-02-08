// size: 1109 (min) 535 (brotli)
const _expr_comment_comments_id$if_content = intersection(
    2,
    (_scope) => {
      const {
        _: { 8: comment_comments, 10: id },
      } = _scope;
      _input_$1(_scope[0], { comments: comment_comments, path: id });
    },
    () => inChild(0, _input_$1),
  ),
  _id$if_content = conditionalClosure(
    4,
    0,
    0,
    () => _expr_comment_comments_id$if_content,
  ),
  _comment_comments$if_content = conditionalClosure(
    4,
    0,
    0,
    () => _expr_comment_comments_id$if_content,
  ),
  _if_content = createRenderer("<ul></ul>", "/ b&", (_scope) => {
    _comment_comments$if_content._(_scope, _scope._[8]),
      _id$if_content._(_scope, _scope._[10]),
      _scope[0];
  }),
  _expr_input_path_i$for_content = intersection(2, (_scope) => {
    const {
      _: { 4: input_path },
      9: i,
    } = _scope;
    _id$for_content(_scope, `${input_path || "c"}-${i}`);
  }),
  _if$for_content = conditional(4, _if_content),
  _open$for_content_effect = effect("a0", (_scope, { 11: open }) =>
    on(_scope[2], "click", function () {
      _open$for_content(_scope, !open);
    }),
  ),
  _open$for_content = state(11, (_scope, open) => {
    attr(_scope[0], "hidden", !open),
      data(_scope[3], open ? "[-]" : "[+]"),
      _open$for_content_effect(_scope);
  }),
  _id$for_content = value(10, (_scope, id) => {
    attr(_scope[0], "id", id), _id$if_content(_scope, id);
  }),
  _i$for_content = value(9, 0, () => _expr_input_path_i$for_content),
  _comment_comments$for_content = value(
    8,
    (_scope, comment_comments) => {
      _if$for_content(_scope, comment_comments ? 0 : 1),
        _comment_comments$if_content(_scope, comment_comments);
    },
    () => _if$for_content,
  ),
  _comment_text$for_content = value(7, (_scope, comment_text) =>
    data(_scope[1], comment_text),
  ),
  _comment$for_content = value(
    6,
    (_scope, comment) => {
      _comment_text$for_content(_scope, comment?.text),
        _comment_comments$for_content(_scope, comment?.comments);
    },
    () => _comment_comments$for_content,
  ),
  _params_2$for_content = value(
    5,
    (_scope, _params_2) => {
      _comment$for_content(_scope, _params_2[0]),
        _i$for_content(_scope, _params_2[1]);
    },
    () => intersections([_comment$for_content, _i$for_content]),
  ),
  _input_path$for_content = loopClosure(
    0,
    0,
    () => _expr_input_path_i$for_content,
  ),
  _for = loopOf(
    0,
    createRenderer(
      "<li><span> </span><button> </button><!></li>",
      " E l D l%",
      (_scope) => {
        _input_path$for_content._(_scope, _scope._[4]),
          _open$for_content(_scope, !0);
      },
      () => _params_2$for_content,
    ),
  ),
  _input_path_ = value(4, (_scope, input_path) =>
    _input_path$for_content(_scope, input_path),
  ),
  _input_comments_ = value(
    3,
    (_scope, input_comments) => _for(_scope, [input_comments]),
    () => _for,
  ),
  _input_$1 = value(
    2,
    (_scope, input) => {
      _input_comments_(_scope, input.comments),
        _input_path_(_scope, input.path);
    },
    () => _input_comments_,
  ),
  _input_ = value(
    2,
    (_scope, input) => {
      const _comments_input_spread = input;
      _input_comments_(_scope[0], _comments_input_spread.comments),
        _input_path_(_scope[0], _comments_input_spread.path);
    },
    () =>
      intersections([inChild(0, _input_comments_), inChild(0, _input_path_)]),
  ),
  _params__ = value(
    1,
    (_scope, _params_) => _input_(_scope, _params_[0]),
    () => _input_,
  );
function _setup_(_scope) {
  _scope[0];
}
createTemplate("b", "<ul></ul>", "/ b&", _setup_, () => _params__).mount();

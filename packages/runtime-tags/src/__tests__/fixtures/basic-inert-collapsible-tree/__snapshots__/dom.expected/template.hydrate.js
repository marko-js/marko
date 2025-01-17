// size: 1148 (min) 531 (brotli)
const _expr_comment_comments_id$if_content = _$.intersection(
    2,
    (_scope) => {
      const {
        _: { 8: comment_comments, 10: id },
      } = _scope;
      _input_(_scope[0], { comments: comment_comments, path: id });
    },
    () => _$.inChild(0, _input_),
  ),
  _id$if_content = _$.conditionalClosure(
    4,
    () => _if_content,
    0,
    () => _expr_comment_comments_id$if_content,
  ),
  _comment_comments$if_content = _$.conditionalClosure(
    4,
    () => _if_content,
    0,
    () => _expr_comment_comments_id$if_content,
  ),
  _setup$if_content = (_scope) => {
    _comment_comments$if_content._(_scope, _scope._[8]),
      _id$if_content._(_scope, _scope._[10]),
      _scope[0];
  },
  _if_content = _$.register(
    "a0",
    _$.createRenderer("<ul></ul>", "/ b&", _setup$if_content),
  ),
  _expr_input_path_i$for_content = _$.intersection(2, (_scope) => {
    const {
      _: { 4: input_path },
      9: i,
    } = _scope;
    _id$for_content(_scope, `${input_path || "c"}-${i}`);
  }),
  _if$for_content = _$.conditional(4, 0),
  _open$for_content_effect = _$.effect("a1", (_scope, { 11: open }) =>
    _$.on(_scope[2], "click", function () {
      _open$for_content(_scope, !open);
    }),
  ),
  _open$for_content = _$.state(11, (_scope, open) => {
    _$.attr(_scope[0], "hidden", !open),
      _$.data(_scope[3], open ? "[-]" : "[+]"),
      _open$for_content_effect(_scope);
  }),
  _id$for_content = _$.value(10, (_scope, id) => {
    _$.attr(_scope[0], "id", id), _id$if_content(_scope, id);
  }),
  _i$for_content = _$.value(9, 0, () => _expr_input_path_i$for_content),
  _comment_comments$for_content = _$.value(
    8,
    (_scope, comment_comments) => {
      _if$for_content(_scope, comment_comments ? _if_content : null),
        _comment_comments$if_content(_scope, comment_comments);
    },
    () => _if$for_content,
  ),
  _comment_text$for_content = _$.value(7, (_scope, comment_text) =>
    _$.data(_scope[1], comment_text),
  ),
  _comment$for_content = _$.value(
    6,
    (_scope, comment) => {
      _comment_text$for_content(_scope, comment?.text),
        _comment_comments$for_content(_scope, comment?.comments);
    },
    () => _comment_comments$for_content,
  ),
  _params_2$for_content = _$.value(
    5,
    (_scope, _params_2) => {
      _comment$for_content(_scope, _params_2[0]),
        _i$for_content(_scope, _params_2[1]);
    },
    () => _$.intersections([_comment$for_content, _i$for_content]),
  ),
  _input_path$for_content = _$.loopClosure(
    0,
    0,
    () => _expr_input_path_i$for_content,
  ),
  _setup$for_content = (_scope) => {
    _input_path$for_content._(_scope, _scope._[4]),
      _open$for_content(_scope, !0);
  },
  _for_content = _$.register(
    "a2",
    _$.createRenderer(
      "<li><span> </span><button> </button><!></li>",
      " E l D l%",
      _setup$for_content,
      () => _params_2$for_content,
    ),
  ),
  _for = _$.loopOf(0, _for_content),
  _input_path_ = _$.value(4, (_scope, input_path) =>
    _input_path$for_content(_scope, input_path),
  ),
  _input_comments_ = _$.value(
    3,
    (_scope, input_comments) => _for(_scope, [input_comments]),
    () => _for,
  ),
  _input_ = _$.value(
    2,
    (_scope, input) => {
      _input_comments_(_scope, input.comments),
        _input_path_(_scope, input.path);
    },
    () => _input_comments_,
  );
init();

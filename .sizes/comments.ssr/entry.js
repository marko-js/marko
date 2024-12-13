// size: 954 (min) 482 (brotli)
const _expr_comment_comments_id$ifBody = intersection(
    2,
    (_scope) => {
      const {
        _: { 8: comment_comments, 10: id },
      } = _scope;
      _input_(_scope[0], { comments: comment_comments, path: id });
    },
    () => inChild(0, _input_),
  ),
  _id$ifBody = closure(10, 0, void 0, () => _expr_comment_comments_id$ifBody),
  _comment_comments$ifBody = closure(
    8,
    0,
    void 0,
    () => _expr_comment_comments_id$ifBody,
  ),
  _ifBody = register(
    "a0",
    createRenderer(
      "<ul></ul>",
      "/ b&",
      (_scope) => {
        _scope[0];
      },
      () => [_id$ifBody, _comment_comments$ifBody],
    ),
  ),
  _expr_input_path_i$forBody = intersection(
    2,
    (_scope) => {
      const {
        _: { 4: input_path },
        9: i,
      } = _scope;
      _id$forBody(_scope, `${input_path || "c"}-${i}`);
    },
    () => _id$forBody,
  ),
  _if$forBody = conditional(4),
  _open$forBody_effect = effect("a1", (_scope, { 11: open }) =>
    on(_scope[2], "click", function () {
      _open$forBody(_scope, !open);
    }),
  ),
  _open$forBody = state(11, (_scope, open) => {
    attr(_scope[0], "hidden", !open),
      data(_scope[3], open ? "[-]" : "[+]"),
      _open$forBody_effect(_scope);
  }),
  _id$forBody = value(
    10,
    (_scope, id) => attr(_scope[0], "id", id),
    () => inConditionalScope(_id$ifBody, 4),
  ),
  _i$forBody = value(9, 0, () => _expr_input_path_i$forBody),
  _comment_comments$forBody = value(
    8,
    (_scope, comment_comments) =>
      _if$forBody(_scope, comment_comments ? _ifBody : null),
    () =>
      intersections([
        _if$forBody,
        inConditionalScope(_comment_comments$ifBody, 4),
      ]),
  ),
  _comment_text$forBody = value(7, (_scope, comment_text) =>
    data(_scope[1], comment_text),
  ),
  _comment$forBody = value(
    6,
    (_scope, comment) => {
      _comment_text$forBody(_scope, comment?.text),
        _comment_comments$forBody(_scope, comment?.comments);
    },
    () => _comment_comments$forBody,
  ),
  _params_2$forBody = value(
    5,
    (_scope, _params_2) => {
      _comment$forBody(_scope, _params_2[0]), _i$forBody(_scope, _params_2[1]);
    },
    () => intersections([_comment$forBody, _i$forBody]),
  ),
  _input_path$forBody = closure(4, 0, void 0, () => _expr_input_path_i$forBody),
  _for = loopOf(
    0,
    register(
      "a2",
      createRenderer(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (_scope) => {
          _open$forBody(_scope, !0);
        },
        () => [_input_path$forBody],
        () => _params_2$forBody,
      ),
    ),
  ),
  _input_path_ = value(4, 0, () => inLoopScope(_input_path$forBody, 0)),
  _input_comments_ = value(
    3,
    (_scope, input_comments) => _for(_scope, [input_comments]),
    () => _for,
  ),
  _input_ = value(
    2,
    (_scope, input) => {
      _input_comments_(_scope, input.comments),
        _input_path_(_scope, input.path);
    },
    () => intersections([_input_comments_, _input_path_]),
  );
init();

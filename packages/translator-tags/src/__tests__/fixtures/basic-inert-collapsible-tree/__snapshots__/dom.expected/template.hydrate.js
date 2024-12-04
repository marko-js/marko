// size: 1226 (min) 552 (brotli)
const _expr_comment_comments_id$ifBody = _$.intersection(
    2,
    (_scope) => {
      const {
        _: { 8: comment_comments, 10: id },
      } = _scope;
      _input_(_scope[0], { comments: comment_comments, path: id });
    },
    () => _$.inChild(0, _input_),
  ),
  _id$ifBody = _$.closure(
    10,
    0,
    void 0,
    () => _expr_comment_comments_id$ifBody,
  ),
  _comment_comments$ifBody = _$.closure(
    8,
    0,
    void 0,
    () => _expr_comment_comments_id$ifBody,
  ),
  _setup$ifBody = (_scope) => {
    _scope[0];
  },
  _ifBody = _$.register(
    "a0",
    _$.createRenderer("<ul></ul>", "/ b&", _setup$ifBody, () => [
      _id$ifBody,
      _comment_comments$ifBody,
    ]),
  ),
  _expr_input_path_i$forBody = _$.intersection(
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
  _if$forBody = _$.conditional(4, 0),
  _open$forBody_effect = _$.effect("a1", (_scope) =>
    _$.on(
      _scope[2],
      "click",
      ((_scope) => {
        const { 11: open } = _scope;
        return function () {
          _open$forBody(_scope, !open);
        };
      })(_scope),
    ),
  ),
  _open$forBody = _$.state(11, (_scope, open) => {
    _$.attr(_scope[0], "hidden", !open),
      _$.data(_scope[3], open ? "[-]" : "[+]"),
      _open$forBody_effect(_scope);
  }),
  _id$forBody = _$.value(
    10,
    (_scope, id) => _$.attr(_scope[0], "id", id),
    () => _$.inConditionalScope(_id$ifBody, 4),
  ),
  _i$forBody = _$.value(9, 0, () => _expr_input_path_i$forBody),
  _comment_comments$forBody = _$.value(
    8,
    (_scope, comment_comments) =>
      _if$forBody(_scope, comment_comments ? _ifBody : null),
    () =>
      _$.intersections([
        _if$forBody,
        _$.inConditionalScope(_comment_comments$ifBody, 4),
      ]),
  ),
  _comment_text$forBody = _$.value(7, (_scope, comment_text) =>
    _$.data(_scope[1], comment_text),
  ),
  _comment$forBody = _$.value(
    6,
    (_scope, comment) => {
      _comment_text$forBody(_scope, comment?.text),
        _comment_comments$forBody(_scope, comment?.comments);
    },
    () => _comment_comments$forBody,
  ),
  _params_2$forBody = _$.value(
    5,
    (_scope, _params_2) => {
      _comment$forBody(_scope, _params_2[0]), _i$forBody(_scope, _params_2[1]);
    },
    () => _$.intersections([_comment$forBody, _i$forBody]),
  ),
  _input_path$forBody = _$.closure(
    4,
    0,
    void 0,
    () => _expr_input_path_i$forBody,
  ),
  _setup$forBody = (_scope) => {
    _open$forBody(_scope, !0);
  },
  _forBody = _$.register(
    "a2",
    _$.createRenderer(
      "<li><span> </span><button> </button><!></li>",
      " E l D l%",
      _setup$forBody,
      () => [_input_path$forBody],
      () => _params_2$forBody,
    ),
  ),
  _for = _$.loopOf(0, _forBody),
  _input_path_ = _$.value(4, 0, () => _$.inLoopScope(_input_path$forBody, 0)),
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
    () => _$.intersections([_input_comments_, _input_path_]),
  );
init();

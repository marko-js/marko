// size: 1090 (min) 508 (brotli)
const _expr_comment_id$ifBody = _$.intersection(
    2,
    (_scope) => {
      const {
        _: { 6: comment, 8: id },
      } = _scope;
      _input_(_scope[0], { comments: comment.comments, path: id });
    },
    () => _$.inChild(0, _input_),
  ),
  _id$ifBody = _$.closure(8, 0, void 0, () => _expr_comment_id$ifBody),
  _comment$ifBody = _$.closure(6, 0, void 0, () => _expr_comment_id$ifBody),
  _setup$ifBody = (_scope) => {
    _scope[0];
  },
  _ifBody = _$.register(
    "c",
    _$.createRenderer("<ul></ul>", "/ b&", _setup$ifBody, () => [
      _id$ifBody,
      _comment$ifBody,
    ]),
  ),
  _expr_input_i$forBody = _$.intersection(
    2,
    (_scope) => {
      const {
        _: { 2: input },
        7: i,
      } = _scope;
      _id$forBody(_scope, `${input.path || "c"}-${i}`);
    },
    () => _id$forBody,
  ),
  _if$forBody = _$.conditional(4, 0),
  _open$forBody_effect = _$.effect("d", (_scope) =>
    _$.on(
      _scope[2],
      "click",
      ((_scope) => {
        const { 9: open } = _scope;
        return function () {
          _open$forBody(_scope, !open);
        };
      })(_scope),
    ),
  ),
  _open$forBody = _$.state(9, (_scope, open) => {
    _$.attr(_scope[0], "hidden", !open),
      _$.data(_scope[3], open ? "[-]" : "[+]"),
      _open$forBody_effect(_scope);
  }),
  _id$forBody = _$.value(
    8,
    (_scope, id) => _$.attr(_scope[0], "id", id),
    () => _$.inConditionalScope(_id$ifBody, 4),
  ),
  _i$forBody = _$.value(7, 0, () => _expr_input_i$forBody),
  _comment$forBody = _$.value(
    6,
    (_scope, comment) => {
      _$.data(_scope[1], comment.text),
        _if$forBody(_scope, comment.comments ? _ifBody : null);
    },
    () =>
      _$.intersections([
        _if$forBody,
        _$.inConditionalScope(_comment$ifBody, 4),
      ]),
  ),
  _params_2$forBody = _$.value(
    5,
    (_scope, _params_2) => {
      _comment$forBody(_scope, _params_2[0]), _i$forBody(_scope, _params_2[1]);
    },
    () => _$.intersections([_comment$forBody, _i$forBody]),
  ),
  _input$forBody = _$.closure(2, 0, void 0, () => _expr_input_i$forBody),
  _setup$forBody = (_scope) => {
    _open$forBody(_scope, !0);
  },
  _forBody = _$.register(
    "e",
    _$.createRenderer(
      "<li><span> </span><button> </button><!></li>",
      " E l D l%",
      _setup$forBody,
      () => [_input$forBody],
      () => _params_2$forBody,
    ),
  ),
  _for = _$.loopOf(0, _forBody),
  _input_ = _$.value(
    2,
    (_scope, input) => _for(_scope, [input.comments]),
    () => _$.intersections([_for, _$.inLoopScope(_input$forBody, 0)]),
  );
init();

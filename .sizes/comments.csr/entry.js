// size: 1003 (min) 491 (brotli)
const _expr_comment_id$ifBody = intersection(
    2,
    (_scope) => {
      const {
        _: { 6: comment, 8: id },
      } = _scope;
      _input_$1(_scope[0], { comments: comment.comments, path: id });
    },
    () => inChild(0, _input_$1),
  ),
  _id$ifBody = closure(8, 0, void 0, () => _expr_comment_id$ifBody),
  _comment$ifBody = closure(6, 0, void 0, () => _expr_comment_id$ifBody),
  _ifBody = register(
    "a0",
    createRenderer(
      "<ul></ul>",
      "/ b&",
      (_scope) => {
        _scope[0];
      },
      () => [_id$ifBody, _comment$ifBody],
    ),
  ),
  _expr_input_i$forBody = intersection(
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
  _if$forBody = conditional(4),
  _open$forBody_effect = effect("a1", (_scope) =>
    on(
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
  _open$forBody = state(9, (_scope, open) => {
    attr(_scope[0], "hidden", !open),
      data(_scope[3], open ? "[-]" : "[+]"),
      _open$forBody_effect(_scope);
  }),
  _id$forBody = value(
    8,
    (_scope, id) => attr(_scope[0], "id", id),
    () => inConditionalScope(_id$ifBody, 4),
  ),
  _i$forBody = value(7, 0, () => _expr_input_i$forBody),
  _comment$forBody = value(
    6,
    (_scope, comment) => {
      data(_scope[1], comment.text),
        _if$forBody(_scope, comment.comments ? _ifBody : null);
    },
    () => intersections([_if$forBody, inConditionalScope(_comment$ifBody, 4)]),
  ),
  _params_2$forBody = value(
    5,
    (_scope, _params_2) => {
      _comment$forBody(_scope, _params_2[0]), _i$forBody(_scope, _params_2[1]);
    },
    () => intersections([_comment$forBody, _i$forBody]),
  ),
  _input$forBody = closure(2, 0, void 0, () => _expr_input_i$forBody),
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
        () => [_input$forBody],
        () => _params_2$forBody,
      ),
    ),
  ),
  _input_$1 = value(
    2,
    (_scope, input) => _for(_scope, [input.comments]),
    () => intersections([_for, inLoopScope(_input$forBody, 0)]),
  ),
  _input_ = value(
    2,
    (_scope, input) => _input_$1(_scope[0], input),
    () => inChild(0, _input_$1),
  ),
  _params__ = value(
    1,
    (_scope, _params_) => _input_(_scope, _params_[0]),
    () => _input_,
  );
function _setup_(_scope) {
  _scope[0];
}
createTemplate(
  "b",
  "<ul></ul>",
  "/ b&",
  _setup_,
  void 0,
  () => _params__,
).mount();

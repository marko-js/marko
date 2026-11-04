// tags/shape.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button> </button>`)($D_content__template, $D_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& D l`)($D_content__walks, $D_content__walks);
const $setup$1 = [["a>", "b>"], ["b4"]];
_shells({
	b3: `b3;${$D_content__walks};${$D_content__template}`,
	b: `b a> b>!b4;${((_w0, _w1) => `b/${_w0}&/${_w1}& D l`)($D_content__walks, $D_content__walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button> </button>`)($D_content__template, $D_content__template)}`,
	b2: "b2;D ;<span> </span>"
});
var shape_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 1), $ui__input_x__OR__input_y = _unfilled_if($scope0_reason, 0), $ui__input_a = _unfilled_if($scope0_reason, 1), $wi__input_x__OR__input_y = _write_if($scope0_reason, 0), $sg__input_a = _server_guard($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $f2__closures = /* @__PURE__ */ new Set();
	$fg__input_a && $ui__input_x__OR__input_y && _patch_write($scope0_id, "xg", input.a, !$sg__input_a);
	let n = 0;
	const f = _bind_resume(function() {
		return input.a;
	}, "b0", $scope0_id);
	const D = { content: _content("b3", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__on = _write_guard($scope1_reason, 0), $wi__on = _write_if($scope1_reason, 0);
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_mark($scope2_id, "a", f(), 1, $scope0_reason, 1)}</span>`);
				$cg__input_a && _patch_render($scope2_id, "b1");
				_subscribe(_unfilled_if($scope0_reason, 1) && $f2__closures, _scope($scope2_id, { _: ($wi__input_a || $wi__on) && _scope_with_id($scope1_id) }), $cg__input_a && "b1");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__on, 1, 0, 0, ["b2"], $scope1_reason, 0);
		($wi__input_a || $wi__on) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id, 0) };
	_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	D.content({ on: input.x });
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 3) << 1);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	D.content({ on: input.y });
	_patch_child_end();
	_html(`<button>${_text_mark($scope0_id, "d", n)}</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "b4");
	_patch_fill($scope0_id, "vb6", n, 1);
	_scope($scope0_id, {
		g: $wi__input_x__OR__input_y && ($ui__input_x__OR__input_y || $ui__input_a) && input.a,
		j: n,
		k: $wi__input_x__OR__input_y && ($ui__input_x__OR__input_y || $ui__input_a) && f,
		l: $wi__input_a && $f2__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	}) || $fg__input_a && $ui__input_x__OR__input_y && _patch_write($scope0_id, "xk", f, !$sg__input_a) && _client_guard($scope0_reason, 0) && _patch_subscribers($scope0_id, "b5", "k g");
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks)};${((_w0) => `<!>${_w0}`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5 | _updates_from($scope0_reason, 3) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	shape_default({
		a: input.a,
		x: input.x,
		y: input.y
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

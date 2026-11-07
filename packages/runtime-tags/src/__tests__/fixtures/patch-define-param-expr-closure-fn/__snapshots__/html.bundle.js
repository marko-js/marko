// tags/counter.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button> </button>" });
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", n, 1);
	_scope($scope0_id, { c: n });
});

// template.marko
const $D_content__walks = "D l";
const $D_content__template = "<span> </span>";
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}&`)($D_content__walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}`)($D_content__template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a = _write_if($scope0_reason, 0), $sg__input_a = _server_guard($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $f2__closures = /* @__PURE__ */ new Set();
	$fg__input_a && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.a, !$sg__input_a);
	const f = _bind_resume(function() {
		return input.a;
	}, "a0", $scope0_id);
	const D = { content: _content("a1", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__on = _filled_guard($scope1_reason, 0);
		_html(`<span>${_text_mark($scope1_id, "a", on && f(), 1, (_updates_from($scope0_reason, 0) | _updates_from($scope1_reason, 0)) << 1, 0)}</span>`);
		_patch_render($scope1_id, "a2", [
			_filled_guard($scope0_reason, 0) && ">g",
			_filled_guard($scope0_reason, 0) && ">e",
			$fg__on && "d"
		], (_updates_from($scope0_reason, 0) | _updates_from($scope1_reason, 0)) << 1, 0);
		_subscribe(_unfilled_if((_updates_from($scope0_reason, 0) | _updates_from($scope1_reason, 0)) << 1, 0) && $wi__input_a && $f2__closures, _scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 0)) && on,
			_: ($wi__input_a || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}), _client_guard((_updates_from($scope0_reason, 0) | _updates_from($scope1_reason, 0)) << 1, 0) && "a3") || $fg__on && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "xd", on, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	D.content({ on: input.x });
	_patch_child_end();
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	counter_default({});
	_patch_child_end();
	$fg__input_a && _patch_subscribers($scope0_id, "a4", ["g", "e"]);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && f,
		h: $wi__input_a && $f2__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	}) || $fg__input_a && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xg", f, !$sg__input_a);
}, 1);

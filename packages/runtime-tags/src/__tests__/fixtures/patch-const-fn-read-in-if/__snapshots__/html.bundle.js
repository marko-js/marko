// tags/counter.marko
const $template = "<button class=inc> </button>";
const $walks = " D l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button class=inc> </button>" });
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", n, 1);
	_scope($scope0_id, { c: n });
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	a: `a${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&`)($walks)};${((_w0) => `<!><!>${_w0}`)($template)}`,
	a2: "a2;D ;<span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 1), $ui__input_x = _unfilled_if($scope0_reason, 1), $sg__input_a = _server_guard($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_a && $ui__input_x && _patch_write($scope0_id, "xe", input.a, !$sg__input_a);
	const f = _bind_resume(function() {
		return input.a;
	}, "a0", $scope0_id);
	_if(() => {
		if (input.x) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_mark($scope1_id, "a", f(), 1, $scope0_reason, 0)}</span>`);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_x, 1, 0, 0, ["a2"], $scope0_reason, 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	counter_default({});
	_patch_child_end();
	$fg__input_a && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "a1", ["g", "e"]);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.a,
		g: ($ui__input_x || _unfilled_if($scope0_reason, 0)) && f,
		b: _existing_scope($childScope)
	}) || $fg__input_a && $ui__input_x && _patch_write($scope0_id, "xg", f, !$sg__input_a);
}, 1);

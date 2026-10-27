// tags/child.marko
const $template = "<p> </p>";
const $setup = [[], []];
_shells({ b: "b !;D ;<p> </p>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", input.a + input.b, void 0, $scope0_reason, 0)}</p>`);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b2");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.a,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb0", input.a, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb1", input.b, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({
	a: "a !a2;b%b ;<!><!><button class=n>+</button>",
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([["a5"], []], ["a>", $setup], ["b>", $setup]))};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", "D l")};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template, $template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(34);
			const $childScope = _patch_child($scope1_id, "a", 0);
			child_default({
				a: "x",
				b: n
			});
			_patch_child_end();
			_set_scope_reason(38 | _mask_group($scope0_reason, 1) << 3);
			const $childScope2 = _patch_child($scope1_id, "b", 1);
			child_default({
				a: input.y,
				b: n
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.y,
		g: n
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.y, !_server_guard($scope0_reason, 1));
}, 1);

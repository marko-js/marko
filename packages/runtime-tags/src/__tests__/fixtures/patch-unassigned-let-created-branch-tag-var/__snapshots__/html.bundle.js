// tags/echo.marko
const $setup = [[], []];
_shells({ b: "b," });
var echo_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return input.value;
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([["a4"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)("")}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let x = input.v;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "a", 0, 1);
			let e = echo_default({ value: x });
			_var($scope1_id, "b", $childScope, "a0");
			_patch_child_end();
			_html(`<p>${_text_resume($scope1_id, "c", e)}</p>`);
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 1);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", x, 1);
	_scope($scope0_id, { f: $wi__input_show && x });
	$wg__input_show || $wi__input_show && _resume_branch($scope0_id);
}, 1);

// tags/user-info.marko
const $setup$1 = [[], []];
_shells({ b: "b," });
var user_info_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return input.user;
});

// template.marko
const $setup = _shell_setup([[], ["a4"]], ["c>", $setup$1]);
_shells({
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` D 0${_w0}&lD l%c`)("")};${((_w0) => `<button class=inc> </button>${_w0}<p> </p><!><!>`)("")}`)(),
	a3: /*@__PURE__*/ (() => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)("")}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_user = _client_guard($scope0_reason, 0), $cg__input_user2 = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id($scope0_id, "c", 0, $cg__input_user && 1);
	let info = user_info_default({ user: input.user });
	$cg__input_user && _var($scope0_id, "d", $childScope, "a0");
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "e", info.name, 1, $scope0_reason, 0)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1, $cg__input_user2 && 1);
			let info2 = user_info_default({ user: input.user2 });
			$cg__input_user2 && _var($scope1_id, "b", $childScope2, "a1");
			_patch_child_end();
			_html(`<p>${_text_resume($scope1_id, "c", info2.name, 1, $scope0_reason, 2)}</p>`);
			$cg__input_user2 && _patch_init($scope1_id, "a2");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "f", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a3"], $scope0_reason, 1);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		k: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.user2,
		l: n,
		c: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va5", input.user2, !_server_guard($scope0_reason, 2));
}, 1);

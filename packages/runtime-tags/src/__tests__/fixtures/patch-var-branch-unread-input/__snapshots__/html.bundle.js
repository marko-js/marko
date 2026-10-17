// tags/user-info.marko
_shells({ b: "b," });
var user_info_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return input.user;
});

// template.marko
_shells({
	a: /*@__PURE__*/ (() => `a !a3;${((_w0) => ` D 0${_w0}&lD l%c`)("")};${((_w0) => `<button class=inc> </button>${_w0}<p> </p><!><!>`)("")}`)(),
	a0: /*@__PURE__*/ (() => `a0;${/*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)("")}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _patch_child($scope0_id, "c");
	let info = user_info_default({ user: input.user });
	_client_guard($scope0_reason, 0) && _var($scope0_id, "d", $childScope, "a1");
	_html(`<p>${_patch_text($scope0_id, "e", info.name, void 0, $scope0_reason, 0)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope2 = _patch_child($scope1_id, "a");
			let info2 = user_info_default({ user: input.user2 });
			_client_guard($scope0_reason, 2) && _var($scope1_id, "b", $childScope2, "a2");
			_html(`<p>${_patch_text($scope1_id, "c", info2.name, void 0, $scope0_reason, 2)}</p>`);
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "f", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	_script($scope0_id, "a3");
	_patch_value($scope0_id, "va5", n, 1);
	$scope0_page ? _scope($scope0_id, {
		k: _unfilled_if($scope0_reason, 1) && input.user2,
		l: n,
		c: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va4", input.user2, !_server_guard($scope0_reason, 2));
}, 1);

// template.marko
_shells({
	a0: "a0",
	a1: "a1,",
	a2: "a2,",
	a3: "a3,",
	a4: "a4,",
	a5: "a5,",
	a: "a;b%b%b%b%;<!><!><!><!><!><!>",
	a6: "a6;b%;<!><!><!>",
	a7: "a7,"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.p, (a) => {
		_scope_id();
	}, 1, "a3", _unfilled_if($scope0_reason, 0) && 2);
	_try($scope0_id, "b", () => {
		_scope_reason();
		_scope_id();
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "a0", void 0, "a2", 0, 0, 2);
	_for_to(input.n, 0, 1, (i) => {
		const $scope3_id = _scope_id();
		_for_to(i, 0, 1, (j) => {
			_scope_id();
		}, 0, $scope3_id, "a", 1, 1, 1, 0, 0, "a7", $scope0_reason, 1);
		_scope($scope3_id, {});
	}, 0, $scope0_id, "c", 1, 1, 1, 0, 0, "a6", $scope0_reason, 1);
	_await($scope0_id, "d", input.p, (b) => {
		const $scope5_id = _scope_id();
		_script($scope5_id, "a8", 0, _filled_guard($scope0_reason, 1), ">h");
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope5_id, "a9", $cg__input_n);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope5_id, {}), $cg__input_n && "a9", 0);
		_resume_branch($scope5_id);
	}, 1, "a1", _unfilled_if($scope0_reason, 0), 1);
	_scope($scope0_id, {
		h: input.n,
		i: _write_if($scope0_reason, 1) && $input_n__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xh", input.n, !_server_guard($scope0_reason, 1));
}, 1);

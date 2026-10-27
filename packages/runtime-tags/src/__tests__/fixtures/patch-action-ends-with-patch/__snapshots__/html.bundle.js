// template.marko
_shells({
	a1: "a1;D ;<b> </b>",
	a2: "a2",
	a3: "a3;D ;<b> </b>",
	a4: "a4;b%;<!><!><!>",
	a: "a !; bDb%l%bD ;<a id=go href=/next>go</a><p>pending <!></p><!><span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_a = _client_guard($scope0_reason, 0), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const go = _action($scope0_id, "a0");
	_html(`<a id=go href=/next>go</a>${_el_resume($scope0_id, "a")}<p>pending ${_text_resume($scope0_id, "b", go.pending, 2)}</p>`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.a, (a) => {
			const $scope3_id = _scope_id();
			_html(`<b>${_patch_text($scope3_id, "a", a, void 0, $scope0_reason, 0)}</b>`);
			$scope0_page && _scope($scope3_id, {});
		}, 1, "a1", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_a ? "a5" : "a6");
		$scope0_page && $wi__input_a && _subscribe(_unfilled_if($scope0_reason, 0) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_a && "a6", 0);
		$wi__input_a && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a2", void 0, "a4", 1, void 0, 2);
	_html(`<span>${_patch_text($scope0_id, "d", input.label, void 0, $scope0_reason, 1)}</span>`);
	_script($scope0_id, "a7");
	$scope0_page && _scope($scope0_id, {
		i: go,
		j: void 0,
		l: $wi__input_a && _unfilled_if($scope0_reason, 0) && $input_a__closures
	});
}, 1);

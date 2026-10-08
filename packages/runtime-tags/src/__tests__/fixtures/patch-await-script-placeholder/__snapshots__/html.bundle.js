// template.marko
_shells({
	a0: "a0 !a3;D ;<span id=v> </span>",
	a1: "a1 !a3;D ;<span id=v> </span>",
	a2: "a2;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_filled_guard($scope0_reason, 0) && _patch_write($scope3_id, "c", value);
			_html(`<span id=v>${_patch_text($scope3_id, "a", value, void 0, $scope0_reason, 0)}</span>`);
			_script($scope3_id, "a3");
			_patch_effect($scope3_id, "a3", "c");
			_scope($scope3_id, { c: value });
		}, 1, "a0", 1);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a4");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a5", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a6", void 0, "a2", 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { e: $input_promise__closures });
}, 1);

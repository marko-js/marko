// template.marko
_shells({
	a0: "a0;D ;<strong> </strong>",
	a1: "a1;D ;<strong> </strong>",
	a2: "a2;b%;<!><!><!>",
	a3: "a3;D l%;<em> </em><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const $input__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const checked = input.check();
		_html(`<em>${_patch_text($scope1_id, "a", checked, void 0, $scope0_reason, 0)}</em>`);
		_try($scope1_id, "b", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.promise, (value) => {
				const $scope5_id = _scope_id();
				_html(`<strong>${_patch_text($scope5_id, "a", value, void 0, $scope0_reason, 1)}</strong>`);
				_scope($scope5_id, {});
			}, 1, "a0", 1);
			_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "a4");
			$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 1) && "a5", 0);
			$scope0_page && _resume_branch($scope2_id);
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("<span>inner</span>");
		}, void 0, "a6", "a2");
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a7");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a8");
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err_message = _source_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`<span>${_text_resume($scope3_id, "a", err.message, $wg__err_message)}</span>`);
		_source_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, void 0, "a9", "a3", void 0, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 1) && $input_promise__closures,
		e: _unfilled_if($scope0_reason, 0) && $input__closures
	});
}, 1);

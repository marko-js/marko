// template.marko
_shells({
	a0: "a0;D ;<span> </span>",
	a1: "a1;b%;<!><!><!>",
	a2: "a2;b%;<!><!><!>",
	a3: "a3;b%;<!><!><!>",
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
			const $await_content__value__closures = /* @__PURE__ */ new Set();
			_try($scope3_id, "a", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html(`<span>${_patch_text($scope4_id, "a", value, void 0, $scope0_reason, 0)}</span>`);
				_client_guard($scope0_reason, 0) && _patch_init($scope4_id, "a4");
				_subscribe(_unfilled_if($scope0_reason, 0) && $await_content__value__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }), _client_guard($scope0_reason, 0) && "a5");
			}, void 0, (err) => {
				const $scope5_reason = _scope_reason(), $sg__err_message = _source_guard($scope5_reason, 0);
				const $scope5_id = _scope_id();
				_html(`<em>${_text_resume($scope5_id, "a", err.message, $sg__err_message)}</em>`);
				_source_if($scope5_reason, 0) && _scope($scope5_id, {});
			}, void 0, "a6", "a0", void 0, 1);
			$scope0_page && _scope($scope3_id, { f: _unfilled_if($scope0_reason, 0) && $await_content__value__closures });
		}, 1, "a1", 1);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a7");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a8", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a9", void 0, "a3", 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && $input_promise__closures });
}, 1, 0);

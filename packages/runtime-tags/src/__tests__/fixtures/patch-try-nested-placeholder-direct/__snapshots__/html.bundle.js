// template.marko
_shells({
	a0: "a0;D ;<span> </span>",
	a1: "a1,inner",
	a2: "a2,outer",
	a3: "a3;D ;<span> </span>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5;b%;<!><!><!>",
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
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.promise, (value) => {
				const $scope6_id = _scope_id();
				_html(`<span>${_patch_text($scope6_id, "a", value, void 0, $scope0_reason, 0)}</span>`);
				_scope($scope6_id, {});
			}, 1, "a0", 1);
			$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 0) && "a6", 0);
			$scope0_page && _resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("inner");
		}, (err) => {
			const $scope5_reason = _scope_reason(), $sg__err_message = _source_guard($scope5_reason, 0);
			const $scope5_id = _scope_id();
			_html(`<em>${_text_resume($scope5_id, "a", err.message, $sg__err_message)}</em>`);
			_source_if($scope5_reason, 0) && _scope($scope5_id, {});
		}, "a1", "a7", "a4", 1);
		$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, () => {
		_scope_reason();
		_scope_id();
		_html("outer");
	}, void 0, "a2", void 0, "a5", 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { e: $input_promise__closures });
}, 1, 0);

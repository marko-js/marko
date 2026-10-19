// template.marko
_shells({
	a0: "a0;D ;<span> </span>",
	a1: "a1;D ;<span> </span>",
	a2: "a2;b%;<!><!><!>",
	a3: "a3;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0), $scope0_page = _page_render();
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
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, "a4");
			$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 0) && "a4", 0);
			$wi__input_promise && _resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("inner");
		}, (err) => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html(`<em>${_patch_text($scope5_id, "a", err.message)}</em>`);
			_scope($scope5_id, {});
		}, "a5", "a6", "a2", 1, 2);
		$wi__input_promise && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, () => {
		_scope_reason();
		_scope_id();
		_html("outer");
	}, void 0, "a7", void 0, "a3", 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { e: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures });
}, 1);

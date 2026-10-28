// template.marko
_shells({
	a0: "a0;D ;<span> </span>",
	a1: "a1;D ;<em> </em>",
	a2: "a2,inner",
	a3: "a3,outer",
	a4: "a4;D ;<span> </span>",
	a5: "a5;b%;<!><!><!>",
	a6: "a6;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
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
				_html(`<span>${_text_resume($scope6_id, "a", value, 1, $scope0_reason, 0)}</span>`);
				_scope($scope6_id, {});
			}, 1, "a0", 1);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_promise ? "a7" : "a8");
			$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_promise && "a8", 0);
			$wi__input_promise && _resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("inner");
		}, (err) => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html(`<em>${_text_resume($scope5_id, "a", err.message, 1, 4, 0)}</em>`);
			_scope($scope5_id, {});
		}, "a2", "a1", "a5", 1, 1, 3);
		$wi__input_promise && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, () => {
		_scope_reason();
		_scope_id();
		_html("outer");
	}, void 0, "a3", void 0, "a6", 1, void 0, 2);
	_html("</main>");
	_scope($scope0_id, { e: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures });
}, 1);

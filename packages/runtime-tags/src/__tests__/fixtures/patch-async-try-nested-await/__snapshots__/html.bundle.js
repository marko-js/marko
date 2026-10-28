// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1,<em>inner</em>",
	a2: "a2,<em>outer</em>",
	a3: "a3;D ;<em> </em>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5;b%;<!><!><!>",
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
				const $scope5_id = _scope_id();
				_html(`<em>${_text_resume($scope5_id, "a", value, 1, $scope0_reason, 0)}</em>`);
				_scope($scope5_id, {});
			}, 1, "a0", 1);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_promise ? "a6" : "a7");
			$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_promise && "a7", 0);
			$wi__input_promise && _resume_branch($scope2_id);
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("<em>inner</em>");
		}, 0, "a1", "a4", 1, 0, 1);
		$wi__input_promise && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("<em>outer</em>");
	}, 0, "a2", "a5", 1, 0, 1);
	_html("</main>");
	_scope($scope0_id, { e: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures });
}, 1);

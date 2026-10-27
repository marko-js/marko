// template.marko
_shells({
	a2: "a2;D ;<em> </em>",
	a3: "a3;D ;<span> </span>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5,loading",
	a6: "a6;b%;<!><!><!>",
	a7: "a7;b%;<!><!><!>",
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
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			const $await_content__value__closures = /* @__PURE__ */ new Set();
			_try($scope3_id, "a", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html(`<span>${_patch_text($scope4_id, "a", value, void 0, $scope0_reason, 0)}</span>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope4_id, $cg__input_promise ? "a0" : "a1");
				_subscribe(_unfilled_if($scope0_reason, 0) && $await_content__value__closures, _scope($scope4_id, { _: $wi__input_promise && _scope_with_id($scope3_id) }), $cg__input_promise && "a1");
			}, void 0, (err) => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_html(`<em>${_patch_text($scope5_id, "a", err.message)}</em>`);
				_scope($scope5_id, {});
			}, void 0, "a2", "a3", 1, 1, 1);
			$wi__input_promise && _scope($scope3_id, { f: _unfilled_if($scope0_reason, 0) && $await_content__value__closures });
		}, 1, "a4", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "a8" : "a9");
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "a9", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a5", void 0, "a7", 1, void 0, 2);
	_html("</main>");
	_scope($scope0_id, { e: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures });
}, 1);

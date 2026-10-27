// template.marko
_shells({
	a0: "a0;D ;<strong> </strong>",
	a1: "a1,<span>inner</span>",
	a2: "a2;D ;<span> </span>",
	a3: "a3;D ;<strong> </strong>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5;D l%;<em> </em><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1), $cg__input = _client_guard($scope0_reason, 0), $wi__input = _write_if($scope0_reason, 0);
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
				$scope0_page && _scope($scope5_id, {});
			}, 1, "a0", 1);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_promise ? "a6" : "a7");
			$scope0_page && $wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_promise && "a7", 0);
			$wi__input_promise && _resume_branch($scope2_id);
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("<span>inner</span>");
		}, void 0, "a1", "a4", 1, void 0, 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input ? "a8" : "a9");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input__closures, _scope($scope1_id, { _: $wi__input && _scope_with_id($scope0_id) }), $cg__input && "a9");
	}, void 0, (err) => {
		_scope_reason();
		const $scope3_page = _page_render();
		const $scope3_id = _scope_id();
		_html(`<span>${_patch_text($scope3_id, "a", err.message)}</span>`);
		$scope3_page && _scope($scope3_id, {});
	}, void 0, "a2", "a5", 1, 1, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		f: $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures,
		e: $wi__input && (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && $input__closures
	});
}, 1);

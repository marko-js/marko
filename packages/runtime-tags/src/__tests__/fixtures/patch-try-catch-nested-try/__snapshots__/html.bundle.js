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
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1), $cg__input = _client_guard($scope0_reason, 0), $wi__input = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const $input__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const checked = input.check();
		_html(`<em>${_text_resume($scope1_id, "a", checked, 1, $scope0_reason, 0)}</em>`);
		_try($scope1_id, "b", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.promise, (value) => {
				const $scope5_id = _scope_id();
				_html(`<strong>${_text_resume($scope5_id, "a", value, 1, $scope0_reason, 1)}</strong>`);
				_scope($scope5_id, {});
			}, 1, "a0", 1);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_promise ? "a6" : "a7");
			$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_promise && "a7", 0);
			$wi__input_promise && _resume_branch($scope2_id);
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("<span>inner</span>");
		}, 0, "a1", "a4", 1, 0, 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input ? "a8" : "a9");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input__closures, _scope($scope1_id, { _: $wi__input && _scope_with_id($scope0_id) }), $cg__input && "a9");
	}, void 0, (err) => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<span>${_text_resume($scope3_id, "a", err.message, 1, 4, 0)}</span>`);
		_scope($scope3_id, {});
	}, 0, "a2", "a5", 1, 1, 1);
	_html("</main>");
	_scope($scope0_id, {
		f: $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures,
		e: $wi__input && (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && $input__closures
	});
}, 1);

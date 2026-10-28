// template.marko
_shells({
	a2: "a2,done",
	a3: "a3,done",
	a4: "a4;b%;<!><!><!>",
	a5: "a5",
	a: "a !a9; D l%;<button> </button><!><!>",
	a6: "a6;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 3), $wi__input_show__OR__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "a", input.promise, () => {
					_scope_id();
					_html("done");
				}, 1, "a2");
				_unfilled_if($scope0_reason, 3) && _patch_init($scope3_id, $cg__input_promise ? "a7" : "a8");
				$wi__input_show__OR__input_promise && _subscribe(_unfilled_if($scope0_reason, 3) && $input_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }), $cg__input_promise && "a8", 0);
				$wi__input_show__OR__input_promise && _resume_branch($scope3_id);
			}, void 0, (err) => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", err.message, 1, 4, 0)} ${_text_resume($scope2_id, "b", input.title, 2, $scope0_reason, 2)}</em>`);
				_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, _client_guard($scope0_reason, 2) ? "a0" : "a1");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1");
			}, void 0, "a5", "a4", void 0, 1, 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a6"], $scope0_reason, 1);
	_script($scope0_id, "a9");
	_scope($scope0_id, {
		g: input.title,
		h: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.promise,
		i: count,
		j: _write_if($scope0_reason, 2) && $input_title__closures,
		k: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_promise__closures
	}) || (_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va10", input.title, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va11", input.promise, !_server_guard($scope0_reason, 3)));
}, 1);

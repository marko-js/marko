// template.marko
_shells({
	a0: "a0,done",
	a1: "a1,done",
	a2: "a2;b%;<!><!><!>",
	a: "a !a8; D l%;<button> </button><!><!>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_promise = _write_if($scope0_reason, 0), $scope0_page = _page_render();
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
				}, 1, "a0");
				_unfilled_if($scope0_reason, 3) && _patch_init($scope3_id, "a5");
				$wi__input_show__OR__input_promise && _subscribe(_unfilled_if($scope0_reason, 3) && $input_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 3) && "a6", 0);
				$wi__input_show__OR__input_promise && _resume_branch($scope3_id);
			}, void 0, (err) => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "a", err.message)} ${_patch_text($scope2_id, "b", input.title, 2, $scope0_reason, 2)}</em>`);
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a4");
			}, void 0, "a7", "a2", void 0, "");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a3"], $scope0_reason, 1);
	_script($scope0_id, "a8");
	_patch_value($scope0_id, "va11", count, 1);
	$scope0_page ? _scope($scope0_id, {
		g: input.title,
		h: _unfilled_if($scope0_reason, 1) && input.promise,
		i: count,
		j: _write_if($scope0_reason, 2) && $input_title__closures,
		k: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_promise__closures
	}) : (_filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "va9", input.title, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va10", input.promise, !_server_guard($scope0_reason, 3)));
}, 1);

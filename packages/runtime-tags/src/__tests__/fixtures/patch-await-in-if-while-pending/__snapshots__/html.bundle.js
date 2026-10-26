// template.marko
_shells({
	a2: "a2",
	a3: "a3;D%;<div id=done><!> done</div>",
	a4: "a4; ;<section></section>",
	a: "a !a11; D l%;<button> </button><!><!>",
	a5: "a5;D%;<div id=done><!> done</div>",
	a6: "a6;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 4), $scope0_page = _page_render(), $cg__input_promise = _client_guard($scope0_reason, 3), $wi__input_show__OR__input_promise__OR__input_msg = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<section>");
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", input.promise, () => {
					const $scope3_id = _scope_id();
					_html(`<div id=done>${_patch_text($scope3_id, "a", input.msg, void 0, $scope0_reason, 4)} done</div>`);
					_unfilled_if($scope0_reason, 4) && _patch_init($scope3_id, $cg__input_msg ? "a0" : "a1");
					$scope0_page && _subscribe(_unfilled_if($scope0_reason, 4) && $input_msg__closures, _scope($scope3_id, { _: $wi__input_show__OR__input_promise__OR__input_msg && _scope_with_id($scope2_id) }), $cg__input_msg && "a1");
				}, 1, "a3");
				_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_promise ? "a7" : "a8");
				$scope0_page && $wi__input_show__OR__input_promise__OR__input_msg && _subscribe(_unfilled_if($scope0_reason, 3) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_promise && "a8", 0);
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a6"], $scope0_reason, 2);
		_html(`</section>${_el_resume($scope1_id, "a", $wg__input_show)}`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_show ? "a9" : "a10");
		$scope0_page && $wi__input_show__OR__input_promise__OR__input_msg && _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_show && "a10", $wg__input_show);
		$wg__input_show || $wi__input_show__OR__input_promise__OR__input_msg && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "a2", void 0, "a4", 1, void 0, 2);
	_script($scope0_id, "a11");
	$scope0_page ? _scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.promise,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.msg,
		i: count,
		l: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_msg__closures,
		k: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_promise__closures,
		j: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_show__closures
	}) : (_filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va12", input.promise, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va13", input.msg, !_server_guard($scope0_reason, 4)));
}, 1);

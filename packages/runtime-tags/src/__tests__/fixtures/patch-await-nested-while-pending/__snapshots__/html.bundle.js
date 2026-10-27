// template.marko
_shells({
	a2: "a2",
	a3: "a3",
	a4: "a4;D%c%;<div id=inner><!> <!></div>",
	a5: "a5;D%c%;<div id=inner><!> <!></div>",
	a6: "a6;b%;<!><!><!>",
	a7: "a7;D%c%l%;<div id=outer><!> <!></div><!><!>",
	a8: "a8;D%c%l%;<div id=outer><!> <!></div><!><!>",
	a9: "a9;b%;<!><!><!>",
	a: "a !a16; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 3), $scope0_page = _page_render(), $cg__input_inner = _client_guard($scope0_reason, 4), $wi__input_msg__OR__input_inner = _write_if($scope0_reason, 0), $cg__input_outer = _client_guard($scope0_reason, 2), $wi__input_outer__OR__input_msg__OR__input_inner = _write_if($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	const $input_outer__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.outer, (a) => {
			const $scope2_id = _scope_id();
			_html(`<div id=outer>${_patch_text($scope2_id, "a", input.msg, void 0, $scope0_reason, 3)} ${_patch_text($scope2_id, "b", a, 2, $scope0_reason, 2)}</div>`);
			_try($scope2_id, "c", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "a", input.inner, (b) => {
					const $scope4_id = _scope_id();
					_html(`<div id=inner>${_patch_text($scope4_id, "a", input.msg, void 0, $scope0_reason, 3)} ${_patch_text($scope4_id, "b", b, 2, $scope0_reason, 4)}</div>`);
					_unfilled_if($scope0_reason, 3) && _patch_init($scope4_id, $cg__input_msg ? "a0" : "a1");
					$scope0_page && _subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope4_id, { Ck: $wi__input_msg && 1 }), $cg__input_msg && "a1");
				}, 1, "a4", 1);
				_unfilled_if($scope0_reason, 4) && _patch_init($scope3_id, $cg__input_inner ? "a10" : "a11");
				$scope0_page && $wi__input_msg__OR__input_inner && _subscribe(_unfilled_if($scope0_reason, 4) && $input_inner__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), $cg__input_inner && "a11", 0);
				$wi__input_msg__OR__input_inner && _resume_branch($scope3_id);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("<em>inner loading</em>");
			}, void 0, "a2", void 0, "a6", 1, void 0, 2);
			_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_msg ? "a12" : "a13");
			$scope0_page && _subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope2_id, {}), $cg__input_msg && "a13");
		}, 1, "a7", 1);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_outer ? "a14" : "a15");
		$scope0_page && $wi__input_outer__OR__input_msg__OR__input_inner && _subscribe(_unfilled_if($scope0_reason, 2) && $input_outer__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_outer && "a15", 0);
		$wi__input_outer__OR__input_msg__OR__input_inner && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>outer loading</em>");
	}, void 0, "a3", void 0, "a9", 1, void 0, 2);
	_script($scope0_id, "a16");
	$scope0_page && _scope($scope0_id, {
		i: count,
		k: $wi__input_msg && _unfilled_if($scope0_reason, 3) && $input_msg__closures,
		l: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_inner__closures,
		j: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_outer__closures
	});
}, 1);

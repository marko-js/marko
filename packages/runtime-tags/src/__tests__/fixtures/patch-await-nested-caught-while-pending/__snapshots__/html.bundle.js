// template.marko
_shells({
	a2: "a2",
	a3: "a3",
	a4: "a4",
	a5: "a5;D%c%;<span id=last><!> <!></span>",
	a6: "a6;D%c%;<div id=inner><!> <!></div>",
	a7: "a7;D%c%;<div id=inner><!> <!></div>",
	a8: "a8;b%;<!><!><!>",
	a9: "a9;D%c%l%;<div id=outer><!> <!></div><!><!>",
	a10: "a10;D%c%l%;<div id=outer><!> <!></div><!><!>",
	a11: "a11;b%;<!><!><!>",
	a12: "a12;D%c%;<span id=last><!> <!></span>",
	a: "a !a21; D l%b%;<button> </button><!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 3), $cg__input_inner = _client_guard($scope0_reason, 4), $wi__input_msg__OR__input_inner = _write_if($scope0_reason, 0), $cg__input_outer = _client_guard($scope0_reason, 2), $wi__input_outer__OR__input_msg__OR__input_inner = _write_if($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 3);
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
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope4_id, { Cm: $wi__input_msg && 1 }), $cg__input_msg && "a1");
				}, 1, "a6", 1);
				_unfilled_if($scope0_reason, 4) && _patch_init($scope3_id, $cg__input_inner ? "a13" : "a14");
				$wi__input_msg__OR__input_inner && _subscribe(_unfilled_if($scope0_reason, 4) && $input_inner__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), $cg__input_inner && "a14", 0);
				$wi__input_msg__OR__input_inner && _resume_branch($scope3_id);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("<em>inner loading</em>");
			}, () => {
				_scope_reason();
				_scope_id();
				_html("<em>inner failed</em>");
			}, "a3", "a2", "a8", 1, void 0, 3);
			_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_msg ? "a15" : "a16");
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope2_id, {}), $cg__input_msg && "a16");
		}, 1, "a9", 1);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_outer ? "a17" : "a18");
		$wi__input_outer__OR__input_msg__OR__input_inner && _subscribe(_unfilled_if($scope0_reason, 2) && $input_outer__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_outer && "a18", 0);
		$wi__input_outer__OR__input_msg__OR__input_inner && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>outer loading</em>");
	}, void 0, "a4", void 0, "a11", 1, void 0, 2);
	_await($scope0_id, "d", input.last, (c) => {
		const $scope5_id = _scope_id();
		_html(`<span id=last>${_patch_text($scope5_id, "a", input.msg, void 0, $scope0_reason, 3)} ${_patch_text($scope5_id, "b", c, 2, $scope0_reason, 5)}</span>`);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope5_id, $cg__input_msg ? "a19" : "a20");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope5_id, { Cm: $wi__input_msg && 2 }), $cg__input_msg && "a20");
	}, 1, "a5", 1);
	_script($scope0_id, "a21");
	_scope($scope0_id, {
		k: count,
		m: $wi__input_msg && _unfilled_if($scope0_reason, 3) && $input_msg__closures,
		n: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_inner__closures,
		l: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_outer__closures
	});
}, 1);

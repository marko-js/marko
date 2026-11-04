// template.marko
_shells({
	a1: "a1;D%c%;<div id=inner><!> <!></div>",
	a2: "a2;D%c%;<div id=inner><!> <!></div>",
	a3: "a3;b%;<!><!><!>",
	a4: "a4;D%c%l%;<div id=middle><!> <!></div><!><!>",
	a5: "a5;D%c%l%;<div id=middle><!> <!></div><!><!>",
	a6: "a6;b%;<!><!><!>",
	a7: "a7;D%c%l%;<div id=outer><!> <!></div><!><!>",
	a8: "a8;D%c%l%;<div id=outer><!> <!></div><!><!>",
	a9: "a9;b%;<!><!><!>",
	a: "a !a18; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 4), $wi__input_msg__OR__input_inner = _write_if($scope0_reason, 0), $wi__input_msg = _write_if($scope0_reason, 4), $wi__input_msg__OR__input_middle__OR__input_inner = _write_if($scope0_reason, 1), $wi__input_outer__OR__input_msg__OR__input_middle__OR__input_inner = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	const $input_middle__closures = /* @__PURE__ */ new Set();
	const $input_outer__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id(), $ui__input_outer = _unfilled_if($scope0_reason, 3);
		_await($scope1_id, "a", input.outer, (a) => {
			const $scope2_id = _scope_id();
			_html(`<div id=outer>${_text_mark($scope2_id, "a", input.msg, 1, $scope0_reason, 4)} ${_text_mark($scope2_id, "b", a, 2, $scope0_reason, 3)}</div>`);
			_try($scope2_id, "c", () => {
				_scope_reason();
				const $scope3_id = _scope_id(), $ui__input_middle = _unfilled_if($scope0_reason, 5);
				_await($scope3_id, "a", input.middle, (b) => {
					const $scope4_id = _scope_id();
					_html(`<div id=middle>${_text_mark($scope4_id, "a", input.msg, 1, $scope0_reason, 4)} ${_text_mark($scope4_id, "b", b, 2, $scope0_reason, 5)}</div>`);
					_try($scope4_id, "c", () => {
						_scope_reason();
						const $scope5_id = _scope_id(), $ui__input_inner = _unfilled_if($scope0_reason, 6);
						_await($scope5_id, "a", input.inner, (c) => {
							const $scope6_id = _scope_id();
							_html(`<div id=inner>${_text_mark($scope6_id, "a", input.msg, 1, $scope0_reason, 4)} ${_text_mark($scope6_id, "b", c, 2, $scope0_reason, 6)}</div>`);
							_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope6_id, "a0", $cg__input_msg);
							_subscribe(_unfilled_if($scope0_reason, 4) && $input_msg__closures, _scope($scope6_id, { Cl: $wi__input_msg && 2 }), $cg__input_msg && "a0");
						}, 1, "a1", $ui__input_inner, 1);
						_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope5_id, "a10", 1);
						$wi__input_msg__OR__input_inner && _subscribe($ui__input_inner && $input_inner__closures, _scope($scope5_id, { _: _scope_with_id($scope4_id) }), _client_guard($scope0_reason, 6) && "a10", 0);
						$wi__input_msg__OR__input_inner && _resume_branch($scope5_id);
					}, () => {
						_scope_reason();
						_scope_id();
						_html("<em>inner loading</em>");
					}, void 0, "a11", void 0, "a3", 1);
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope4_id, "a12", $cg__input_msg);
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_msg__closures, _scope($scope4_id, { Cl: $wi__input_msg && 1 }), $cg__input_msg && "a12");
				}, 1, "a4", $ui__input_middle, 1);
				_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope3_id, "a13", 1);
				$wi__input_msg__OR__input_middle__OR__input_inner && _subscribe($ui__input_middle && $input_middle__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), _client_guard($scope0_reason, 5) && "a13", 0);
				$wi__input_msg__OR__input_middle__OR__input_inner && _resume_branch($scope3_id);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("<em>middle loading</em>");
			}, void 0, "a14", void 0, "a6", 1);
			_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "a15", $cg__input_msg);
			_subscribe(_unfilled_if($scope0_reason, 4) && $input_msg__closures, _scope($scope2_id, {}), $cg__input_msg && "a15");
		}, 1, "a7", $ui__input_outer, 1);
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "a16", 1);
		$wi__input_outer__OR__input_msg__OR__input_middle__OR__input_inner && _subscribe($ui__input_outer && $input_outer__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 3) && "a16", 0);
		$wi__input_outer__OR__input_msg__OR__input_middle__OR__input_inner && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>outer loading</em>");
	}, void 0, "a17", void 0, "a9", 1);
	_script($scope0_id, "a18");
	_scope($scope0_id, {
		j: count,
		l: $wi__input_msg && _unfilled_if($scope0_reason, 4) && $input_msg__closures,
		n: _write_if($scope0_reason, 6) && _unfilled_if($scope0_reason, 6) && $input_inner__closures,
		m: _write_if($scope0_reason, 5) && _unfilled_if($scope0_reason, 5) && $input_middle__closures,
		k: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_outer__closures
	});
}, 1);

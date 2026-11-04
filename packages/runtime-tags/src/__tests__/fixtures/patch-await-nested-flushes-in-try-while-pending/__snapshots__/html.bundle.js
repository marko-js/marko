// template.marko
_shells({
	a1: "a1;D%c%;<div id=inner><!> <!></div>",
	a2: "a2;D%c%;<div id=inner><!> <!></div>",
	a3: "a3;b%;<!><!><!>",
	a4: "a4;D%c%l%;<div id=outer><!> <!></div><!><!>",
	a5: "a5;D%c%l%;<div id=outer><!> <!></div><!><!>",
	a6: "a6;b%;<!><!><!>",
	a7: "a7;b%;<!><!><!>",
	a: "a !a14; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 3), $wi__input_msg__OR__input_inner = _write_if($scope0_reason, 0), $wi__input_outer__OR__input_msg__OR__input_inner = _write_if($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	const $input_outer__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id(), $ui__input_outer = _unfilled_if($scope0_reason, 2);
			_await($scope2_id, "a", input.outer, (a) => {
				const $scope3_id = _scope_id();
				_html(`<div id=outer>${_text_mark($scope3_id, "a", input.msg, 1, $scope0_reason, 3)} ${_text_mark($scope3_id, "b", a, 2, $scope0_reason, 2)}</div>`);
				_try($scope3_id, "c", () => {
					_scope_reason();
					const $scope4_id = _scope_id(), $ui__input_inner = _unfilled_if($scope0_reason, 4);
					_await($scope4_id, "a", input.inner, (b) => {
						const $scope5_id = _scope_id();
						_html(`<div id=inner>${_text_mark($scope5_id, "a", input.msg, 1, $scope0_reason, 3)} ${_text_mark($scope5_id, "b", b, 2, $scope0_reason, 4)}</div>`);
						_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope5_id, "a0", $cg__input_msg);
						_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope5_id, { Ck: $wi__input_msg && 1 }), $cg__input_msg && "a0");
					}, 1, "a1", $ui__input_inner, 1);
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope4_id, "a8", 1);
					$wi__input_msg__OR__input_inner && _subscribe($ui__input_inner && $input_inner__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }), _client_guard($scope0_reason, 4) && "a8", 0);
					$wi__input_msg__OR__input_inner && _resume_branch($scope4_id);
				}, () => {
					_scope_reason();
					_scope_id();
					_html("<em>inner loading</em>");
				}, void 0, "a9", void 0, "a3", 1);
				_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope3_id, "a10", $cg__input_msg);
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope3_id, {}), $cg__input_msg && "a10");
			}, 1, "a4", $ui__input_outer, 1);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a11", 1);
			$wi__input_outer__OR__input_msg__OR__input_inner && _subscribe($ui__input_outer && $input_outer__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 2) && "a11", 0);
			$wi__input_outer__OR__input_msg__OR__input_inner && _resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("<em>outer loading</em>");
		}, void 0, "a12", void 0, "a6", 1);
		$wi__input_outer__OR__input_msg__OR__input_inner && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("<em>failed</em>");
	}, 0, "a13", "a7", 1);
	_script($scope0_id, "a14");
	_scope($scope0_id, {
		i: count,
		k: $wi__input_msg && _unfilled_if($scope0_reason, 3) && $input_msg__closures,
		l: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_inner__closures,
		j: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_outer__closures
	});
}, 1);

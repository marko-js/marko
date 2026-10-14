// template.marko
_shells({
	a0: "a0;D%c%;<div id=inner><!> <!></div>",
	a1: "a1;D%c%;<div id=inner><!> <!></div>",
	a2: "a2;b%;<!><!><!>",
	a3: "a3;D%c%l%;<div id=outer><!> <!></div><!><!>",
	a4: "a4;D%c%l%;<div id=outer><!> <!></div><!><!>",
	a5: "a5;b%;<!><!><!>",
	a: "a !a16; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_outer__OR__input_msg__OR__input_inner = _write_if($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 3), $scope0_page = _page_render();
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
					_unfilled_if($scope0_reason, 3) && _patch_init($scope4_id, "a6");
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope4_id, {
						_: $wi__input_outer__OR__input_msg__OR__input_inner && _scope_with_id($scope3_id),
						Ck: $wi__input_msg && 1
					}), _client_guard($scope0_reason, 3) && "a7");
				}, 1, "a0", 1);
				_unfilled_if($scope0_reason, 4) && _patch_init($scope3_id, "a8");
				$wi__input_outer__OR__input_msg__OR__input_inner && _subscribe(_unfilled_if($scope0_reason, 4) && $input_inner__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), _client_guard($scope0_reason, 4) && "a9", 0);
				$wi__input_outer__OR__input_msg__OR__input_inner && _resume_branch($scope3_id);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("<em>inner loading</em>");
			}, void 0, "a10", void 0, "a2", 1);
			_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, "a11");
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope2_id, { _: $wi__input_outer__OR__input_msg__OR__input_inner && _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 3) && "a12");
		}, 1, "a3", 1);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "a13");
		$wi__input_outer__OR__input_msg__OR__input_inner && _subscribe(_unfilled_if($scope0_reason, 2) && $input_outer__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "a14", 0);
		$wi__input_outer__OR__input_msg__OR__input_inner && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>outer loading</em>");
	}, void 0, "a15", void 0, "a5", 1);
	_script($scope0_id, "a16");
	_patch_write($scope0_id, "wg", input.msg, 1);
	_patch_write($scope0_id, "wh", input.inner, 1);
	_patch_value($scope0_id, "va17", count, 1);
	$scope0_page && _scope($scope0_id, {
		g: _unfilled_if($scope0_reason, 0) && input.msg,
		h: _unfilled_if($scope0_reason, 2) && input.inner,
		i: count,
		k: $wi__input_msg && _unfilled_if($scope0_reason, 3) && $input_msg__closures,
		l: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_inner__closures,
		j: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_outer__closures
	});
}, 1);

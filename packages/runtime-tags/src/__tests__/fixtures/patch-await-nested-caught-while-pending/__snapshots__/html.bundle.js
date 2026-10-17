// template.marko
_shells({
	a0: "a0;D%c%;<span id=last><!> <!></span>",
	a1: "a1;D%c%;<div id=inner><!> <!></div>",
	a2: "a2;D%c%;<div id=inner><!> <!></div>",
	a3: "a3;b%;<!><!><!>",
	a4: "a4;D%c%l%;<div id=outer><!> <!></div><!><!>",
	a5: "a5;D%c%l%;<div id=outer><!> <!></div><!><!>",
	a6: "a6;b%;<!><!><!>",
	a7: "a7;D%c%;<span id=last><!> <!></span>",
	a: "a !a16; D l%b%;<button> </button><!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_outer__OR__input_msg__OR__input_inner = _write_if($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 4), $scope0_page = _page_render();
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
			_html(`<div id=outer>${_patch_text($scope2_id, "a", input.msg, void 0, $scope0_reason, 4)} ${_patch_text($scope2_id, "b", a, 2, $scope0_reason, 3)}</div>`);
			_try($scope2_id, "c", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "a", input.inner, (b) => {
					const $scope4_id = _scope_id();
					_html(`<div id=inner>${_patch_text($scope4_id, "a", input.msg, void 0, $scope0_reason, 4)} ${_patch_text($scope4_id, "b", b, 2, $scope0_reason, 5)}</div>`);
					_unfilled_if($scope0_reason, 4) && _patch_init($scope4_id, "a8");
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_msg__closures, _scope($scope4_id, {
						_: $wi__input_outer__OR__input_msg__OR__input_inner && _scope_with_id($scope3_id),
						Cm: $wi__input_msg && 1
					}), _client_guard($scope0_reason, 4) && "a8");
				}, 1, "a1", 1);
				_unfilled_if($scope0_reason, 5) && _patch_init($scope3_id, "a9");
				$wi__input_outer__OR__input_msg__OR__input_inner && _subscribe(_unfilled_if($scope0_reason, 5) && $input_inner__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), _client_guard($scope0_reason, 5) && "a9", 0);
				$wi__input_outer__OR__input_msg__OR__input_inner && _resume_branch($scope3_id);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("<em>inner loading</em>");
			}, () => {
				_scope_reason();
				_scope_id();
				_html("<em>inner failed</em>");
			}, "a10", "a11", "a3", 1);
			_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, "a12");
			_subscribe(_unfilled_if($scope0_reason, 4) && $input_msg__closures, _scope($scope2_id, { _: $wi__input_outer__OR__input_msg__OR__input_inner && _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 4) && "a12");
		}, 1, "a4", 1);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, "a13");
		$wi__input_outer__OR__input_msg__OR__input_inner && _subscribe(_unfilled_if($scope0_reason, 3) && $input_outer__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 3) && "a13", 0);
		$wi__input_outer__OR__input_msg__OR__input_inner && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>outer loading</em>");
	}, void 0, "a14", void 0, "a6", 1);
	_await($scope0_id, "d", input.last, (c) => {
		const $scope5_id = _scope_id();
		_html(`<span id=last>${_patch_text($scope5_id, "a", input.msg, void 0, $scope0_reason, 4)} ${_patch_text($scope5_id, "b", c, 2, $scope0_reason, 6)}</span>`);
		_unfilled_if($scope0_reason, 4) && _patch_init($scope5_id, "a15");
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_msg__closures, _scope($scope5_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			Cm: $wi__input_msg && 2
		}), _client_guard($scope0_reason, 4) && "a15");
	}, 1, "a0", 1);
	_script($scope0_id, "a16");
	_patch_write($scope0_id, "wh", input.msg, 1);
	_patch_write($scope0_id, "wi", input.inner, 1);
	_patch_value($scope0_id, "va17", count, 1);
	$scope0_page && _scope($scope0_id, {
		h: _unfilled_if($scope0_reason, 2) && input.msg,
		i: _unfilled_if($scope0_reason, 3) && input.inner,
		k: count,
		m: $wi__input_msg && _unfilled_if($scope0_reason, 4) && $input_msg__closures,
		n: _write_if($scope0_reason, 5) && _unfilled_if($scope0_reason, 5) && $input_inner__closures,
		l: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_outer__closures
	});
}, 1);

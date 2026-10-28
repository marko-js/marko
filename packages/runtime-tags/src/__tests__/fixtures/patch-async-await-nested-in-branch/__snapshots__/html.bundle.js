// template.marko
_shells({
	a2: "a2;D%c%;<em><!>:<!></em>",
	a3: "a3;D%c%;<em><!>:<!></em>",
	a4: "a4;b%;<!><!><!>",
	a: "a !a10;D%b ;<main><!><button>interactive</button></main>",
	a5: "a5;b%;<!><!><!>",
	a6: "a6;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_outer = _client_guard($scope0_reason, 3), $cg__input_inner = _client_guard($scope0_reason, 4), $wi__input_show__OR__input_outer__OR__input_inner = _write_if($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.outer, (outer) => {
				const $scope2_id = _scope_id();
				const $await_content__outer__closures = /* @__PURE__ */ new Set();
				_await($scope2_id, "a", input.inner, (inner) => {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_resume($scope3_id, "a", outer, 1, $scope0_reason, 3)}:${_text_resume($scope3_id, "b", inner, 2, $scope0_reason, 4)}</em>`);
					_unfilled_if($scope0_reason, 3) && _patch_init($scope3_id, $cg__input_outer ? "a0" : "a1");
					_subscribe(_unfilled_if($scope0_reason, 3) && $await_content__outer__closures, _scope($scope3_id, {}), $cg__input_outer && "a1");
				}, 1, "a2");
				_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, $cg__input_inner ? "a7" : "a8");
				$wi__input_show__OR__input_outer__OR__input_inner && _subscribe(_unfilled_if($scope0_reason, 4) && $input_inner__closures, _scope($scope2_id, { j: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $await_content__outer__closures }), $cg__input_inner && "a8", 0);
				$wi__input_show__OR__input_outer__OR__input_inner && _resume_branch($scope2_id);
			}, 1, "a4");
			$cg__input_outer && _patch_init($scope1_id, "a9");
			$wi__input_show__OR__input_outer__OR__input_inner && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["a6"], $scope0_reason, 2);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a10");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.outer,
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.inner,
		i: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_inner__closures
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va11", input.outer, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "va12", input.inner, !_server_guard($scope0_reason, 4)));
}, 1);

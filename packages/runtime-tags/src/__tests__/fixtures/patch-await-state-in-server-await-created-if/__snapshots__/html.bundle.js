// template.marko
_shells({
	a2: "a2;D%c%;<p><!>:<!></p>",
	a3: "a3;D%c%;<p><!>:<!></p>",
	a4: "a4 a13;b%;<!><!><!>",
	a: "a !a9; b%;<button class=open>inc</button><!><!>",
	a5: "a5 a13;b%;<!><!><!>",
	a6: "a6;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(input.label), (s) => {
				const $scope2_id = _scope_id();
				const $await_content__s__closures = /* @__PURE__ */ new Set();
				_await($scope2_id, "a", Promise.resolve(n), (x) => {
					const $scope3_id = _scope_id();
					_html(`<p>${_text_resume($scope3_id, "a", s, 1, $scope0_reason, 1)}:${_text_resume($scope3_id, "b", x, 2)}</p>`);
					_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, $cg__input_label ? "a0" : "a1");
					_subscribe(_unfilled_if($scope0_reason, 1) && $await_content__s__closures, _scope($scope3_id, {}), $cg__input_label && "a1");
				}, 1, "a2", 1);
				_subscribe($n__closures, _scope($scope2_id, { j: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $await_content__s__closures }), "a7", 0);
				_resume_branch($scope2_id);
			}, 1, "a4", _unfilled_if($scope0_reason, 1) && 3);
			$cg__input_label && _patch_init($scope1_id, "a8");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a6"], $scope0_reason, 0);
	_script($scope0_id, "a9");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		g: n,
		i: $n__closures
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va10", input.label, !_server_guard($scope0_reason, 1));
}, 1);

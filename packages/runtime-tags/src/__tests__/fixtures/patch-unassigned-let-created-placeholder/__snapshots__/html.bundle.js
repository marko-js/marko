// template.marko
_shells({
	a0: "a0;D ;<b> </b>",
	a1: "a1;b%;<!><!><!>",
	a: "a !;b%;<!><!><!>",
	a2: "a2;D ;<b> </b>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_p = _client_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_p = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $x__closures = /* @__PURE__ */ new Set();
	const $input_p__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	let x = input.v;
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", input.p, (r) => {
					const $scope4_id = _scope_id();
					_html(`<b>${_text_resume($scope4_id, "a", r, 1, $scope0_reason, 3)}</b>`);
					_scope($scope4_id, {});
				}, 1, "a0", _unfilled_if($scope0_reason, 3) && 2);
				_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_p ? "a4" : "a5");
				$wi__input_show__OR__input_p && _subscribe(_unfilled_if($scope0_reason, 3) && $input_p__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_p && "a5", 0);
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 2);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_show ? "a6" : "a7");
		$wi__input_show__OR__input_p && _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_show && "a7", $wg__input_show);
		$wg__input_show || $wi__input_show__OR__input_p && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<i>${_text_resume($scope3_id, "a", x)}</i>`);
		_subscribe($x__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }));
	}, void 0, "a8", void 0, "a1", 1);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.p,
		g: x,
		j: $x__closures,
		i: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_p__closures,
		h: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_show__closures
	}) || _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va9", input.p, !_server_guard($scope0_reason, 3));
	_resume_branch($scope0_id);
}, 1);

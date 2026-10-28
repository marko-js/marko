// template.marko
_shells({
	a: "a !; ;<main></main>",
	a3: "a3;D lD l%;<div> </div><div class=x> </div><!><!>",
	a4: "a4;b%b%;<!><!><!><!>",
	a2: "a2;D lD ;<div> </div><div class=y> </div>",
	a5: "a5;%;<!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_html = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_html = _write_if($scope0_reason, 0), $wi__input_html = _write_if($scope0_reason, 2), $wg__input_html = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_html__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div>${_html_resume($scope1_id, "a", input.html, 1, $scope0_reason, 2)}</div><div class=x>${_html_resume($scope1_id, "b", input.html, 1, $scope0_reason, 2)}</div>`);
			_if(() => {
				if (input.show > 1) {
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.html) {
							const $scope3_id = _scope_id();
							_html(`<div>${_html_resume($scope3_id, "a", input.html, 1, $scope0_reason, 2)}</div><div class=y>${_html_resume($scope3_id, "b", input.html, 1, $scope0_reason, 2)}</div>`);
							_unfilled_if($scope0_reason, 2) && _patch_init($scope3_id, $cg__input_html ? "a0" : "a1");
							_subscribe(_unfilled_if($scope0_reason, 2) && $input_html__closures, _scope($scope3_id, {
								_: $wi__input_show__OR__input_html && _scope_with_id($scope2_id),
								Cg: $wi__input_html && 1
							}), $cg__input_html && "a1");
							return 0;
						}
					}, $scope2_id, "a", 1, $wg__input_html, 1, 0, 0, ["a2"], $scope0_reason, 2);
					_if(() => {
						if (input.html) {
							const $scope4_id = _scope_id();
							_html(_html_resume($scope4_id, "a", input.html, 1, $scope0_reason, 2));
							_unfilled_if($scope0_reason, 2) && _patch_init($scope4_id, $cg__input_html ? "a6" : "a7");
							_subscribe(_unfilled_if($scope0_reason, 2) && $input_html__closures, _scope($scope4_id, {
								_: $wi__input_show__OR__input_html && _scope_with_id($scope2_id),
								Cg: $wi__input_html && 2
							}), $cg__input_html && "a7");
							return 0;
						}
					}, $scope2_id, "b", 1, $wg__input_html, 1, 0, 0, ["a5"], $scope0_reason, 2);
					_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_html ? "a8" : "a9");
					$wi__input_show__OR__input_html && _subscribe(_unfilled_if($scope0_reason, 2) && $input_html__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_html && "a9", $wg__input_html);
					return 0;
				}
			}, $scope1_id, "c", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 1);
			$cg__input_show && _patch_init($scope1_id, "a10");
			$cg__input_html && _patch_init($scope1_id, "a11");
			_scope($scope1_id, { _: $wi__input_show__OR__input_html && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.html,
		g: $wi__input_html && _unfilled_if($scope0_reason, 2) && $input_html__closures
	}) || _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va12", input.html, !_server_guard($scope0_reason, 2));
}, 1);

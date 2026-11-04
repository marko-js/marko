// template.marko
_shells({
	a: "a; ;<main></main>",
	a2: "a2;D lD l%;<div> </div><div class=x> </div><!><!>",
	a3: "a3;b%b%;<!><!><!><!>",
	a1: "a1;D lD ;<div> </div><div class=y> </div>",
	a4: "a4;%;<!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_html = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_html = _write_if($scope0_reason, 0), $wi__input_html = _write_if($scope0_reason, 2), $wg__input_html = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_html = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_html__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div>${_html_mark($scope1_id, "a", input.html, 1, $scope0_reason, 2)}</div><div class=x>${_html_mark($scope1_id, "b", input.html, 1, $scope0_reason, 2)}</div>`);
			_if(() => {
				if (input.show > 1) {
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.html) {
							const $scope3_id = _scope_id();
							_html(`<div>${_html_mark($scope3_id, "a", input.html, 1, $scope0_reason, 2)}</div><div class=y>${_html_mark($scope3_id, "b", input.html, 1, $scope0_reason, 2)}</div>`);
							_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "a0", $cg__input_html);
							_subscribe(_unfilled_if($scope0_reason, 2) && $input_html__closures, _scope($scope3_id, {
								_: $wi__input_show__OR__input_html && _scope_with_id($scope2_id),
								Cg: $wi__input_html && 1
							}), $cg__input_html && "a0");
							return 0;
						}
					}, $scope2_id, "a", 1, $wg__input_html, 1, 0, 0, ["a1"], $scope0_reason, 2);
					_if(() => {
						if (input.html) {
							const $scope4_id = _scope_id();
							_html(_html_mark($scope4_id, "a", input.html, 2, $scope0_reason, 2));
							_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope4_id, "a5", $cg__input_html);
							_subscribe(_unfilled_if($scope0_reason, 2) && $input_html__closures, _scope($scope4_id, {
								_: $wi__input_show__OR__input_html && _scope_with_id($scope2_id),
								Cg: $wi__input_html && 2
							}), $cg__input_html && "a5");
							return 0;
						}
					}, $scope2_id, "b", 1, $wg__input_html, 1, 0, 0, ["a4"], $scope0_reason, 2);
					_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a6", $cg__input_html);
					$wi__input_show__OR__input_html && _subscribe(_unfilled_if($scope0_reason, 2) && $input_html__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_html && "a6", $wg__input_html);
					$wg__input_html || $wi__input_show__OR__input_html && _resume_branch($scope2_id);
					return 0;
				}
			}, $scope1_id, "c", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 1);
			$cg__input_show && _patch_render($scope1_id, "a7");
			$cg__input_html && _patch_render($scope1_id, "a8");
			_scope($scope1_id, { _: $wi__input_show__OR__input_html && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_html && ($cg__input_show || $cg__input_html) && _patch_subscribers($scope0_id, "a9", "e");
	$fg__input_html && $cg__input_show && _patch_render($scope0_id, "a8", "e");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.html,
		g: $wi__input_html && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && $input_html__closures
	}) || $fg__input_html && $cg__input_show && _patch_write($scope0_id, "xe", input.html, !_server_guard($scope0_reason, 2));
}, 1);

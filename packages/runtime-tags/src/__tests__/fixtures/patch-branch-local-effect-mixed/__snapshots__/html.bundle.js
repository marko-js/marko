// template.marko
_shells({
	a: "a; ;<main></main>",
	a4: "a4;D l%;<p> </p><!><!>",
	a3: "a3,<span>inner</span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_suffix = _client_guard($scope0_reason, 4), $cg__input_title = _client_guard($scope0_reason, 2), $cg__input_inner = _client_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 1), $sg__input_title = _server_guard($scope0_reason, 2), $fg__input_title = _filled_guard($scope0_reason, 2), $fg__input_inner = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_suffix = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = input.title + "!";
			_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "xc", label, !$sg__input_title);
			_html(`<p>${_text_mark($scope1_id, "a", label, 1, $scope0_reason, 2)}</p>`);
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html("<span>inner</span>");
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "a1");
					_script($scope2_id, "a0", 0, (_filled_guard($scope0_reason, 4) || _filled_guard($scope0_reason, 2)) && ($cg__input_suffix || $cg__input_title ? 2 : 1), [_filled_guard($scope0_reason, 4) && ">>g", _filled_guard($scope0_reason, 2) && ">c"], "a2", $scope0_reason, 0);
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_suffix__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_suffix && "a1", 0);
					_resume_branch($scope2_id);
					return 0;
				}
			}, $scope1_id, "b", 1, _write_guard($scope0_reason, 3), 1, 0, 0, ["a3"], $scope0_reason, 3);
			_filled_guard($scope0_reason, 2) && $cg__input_inner && _patch_render($scope1_id, "a5", "c");
			$cg__input_title && _patch_render($scope1_id, "a6");
			$cg__input_inner && _patch_render($scope1_id, "a7");
			_scope($scope1_id, {
				c: label,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_title && $cg__input_show && _patch_render($scope0_id, "a6", "e");
	$fg__input_inner && $cg__input_show && _patch_render($scope0_id, "a7", "f");
	$fg__input_suffix && ($cg__input_show || $cg__input_inner) && _patch_subscribers($scope0_id, "a8", "g");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.title,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.inner,
		g: input.suffix,
		j: _write_if($scope0_reason, 4) && $input_suffix__closures
	}) || ($fg__input_title && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.title, !$sg__input_title), $fg__input_inner && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.inner, !_server_guard($scope0_reason, 3)), $fg__input_suffix && _patch_write($scope0_id, "xg", input.suffix, !_server_guard($scope0_reason, 4)));
}, 1);

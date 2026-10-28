// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_v = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_v = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_v__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let y = input.v;
			_dynamic_tag($scope1_id, "a", y === "b" ? "b" : "i", {}, _content("a0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(_text_resume($scope2_id, "a", input.v, $wg__input_v));
				$wi__input_show__OR__input_v && _subscribe($wi__input_v && $input_v__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_v);
				$wg__input_v || $wi__input_show__OR__input_v && _resume_branch($scope2_id);
			}, $scope1_id), 0, 0);
			$wi__input_show__OR__input_v && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	$wi__input_show__OR__input_v && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.v,
		f: $wi__input_v && $input_v__closures
	});
}, 1);

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 2), $wi__input_v__OR__input_w = _write_if($scope0_reason, 0), $wg__input_v = _write_guard($scope0_reason, 1), $wi__input_v = _write_if($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let show = input.show;
	_if(() => {
		if (input.v) {
			const $scope1_id = _scope_id();
			const Body = { content: _content("a0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<p>${_text_resume($scope2_id, "a", input.w, $wg__input_w)}</p>`);
				$wi__input_v__OR__input_w && _subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_w);
				$wg__input_w || $wi__input_v__OR__input_w && _resume_branch($scope2_id);
			}, $scope1_id) };
			if (show) {
				_scope_id();
				Body.content({});
			}
			$wi__input_v__OR__input_w && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_v, $wg__input_v);
	$wi__input_v__OR__input_w && _scope($scope0_id, {
		f: $wi__input_v && input.w,
		g: $wi__input_v && show,
		h: $wi__input_w && $input_w__closures
	});
	$wg__input_v || $wi__input_v__OR__input_w && _resume_branch($scope0_id);
}, 1);

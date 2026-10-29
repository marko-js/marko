// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v__OR__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 2), $wi__input_v__OR__input_w = _write_if($scope0_reason, 0), $wi__input_v = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	const $input_v__closures = /* @__PURE__ */ new Set();
	let show = input.show;
	const Body = { content: _content("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", Promise.resolve(input.v), (r) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", r + input.w, $wg__input_v__OR__input_w)}</p>`);
			$wi__input_v__OR__input_w && _subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { c: $wi__input_w && r }), "a0", $wg__input_v__OR__input_w);
			$wg__input_v__OR__input_w || $wi__input_v__OR__input_w && _resume_branch($scope2_id);
		}, $wg__input_v__OR__input_w);
		$wi__input_v__OR__input_w && _subscribe($wi__input_v && $input_v__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a2", 0);
		$wi__input_v__OR__input_w && _resume_branch($scope1_id);
	}, $scope0_id) };
	if (show) {
		_scope_id();
		Body.content({});
	}
	$wi__input_v__OR__input_w && _scope($scope0_id, {
		f: $wi__input_v && input.w,
		i: $wi__input_w && $input_w__closures,
		h: $wi__input_v && $input_v__closures
	});
	$wi__input_v__OR__input_w && _resume_branch($scope0_id);
}, 1);

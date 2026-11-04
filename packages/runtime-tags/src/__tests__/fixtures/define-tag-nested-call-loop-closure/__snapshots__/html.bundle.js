// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 1), $wi__input_x__OR__input_list = _write_if($scope0_reason, 0), $wi__input_list = _write_if($scope0_reason, 2), $wg__input_list = _write_guard($scope0_reason, 2), $wi__input_x = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	const E = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<span>${_text_resume($scope1_id, "a", input.x, $wg__input_x)}</span>`);
		$wi__input_x__OR__input_list && _subscribe($wi__input_x && $input_x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_x);
		$wg__input_x || $wi__input_x__OR__input_list && _resume_branch($scope1_id);
	}, $scope0_id) };
	const D = { content: _content("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		E.content({});
		$wi__input_list && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) };
	_for_of(input.list, (i) => {
		const $scope3_id = _scope_id();
		D.content({});
		$wi__input_list && _scope($scope3_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", $wg__input_list, $wg__input_list);
	$wi__input_x__OR__input_list && _scope($scope0_id, {
		d: $wi__input_list && input.x,
		f: $wi__input_x && $input_x__closures
	});
}, 1);

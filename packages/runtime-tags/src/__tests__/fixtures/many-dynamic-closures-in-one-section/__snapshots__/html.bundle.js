// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_b = _write_guard($scope0_reason, 2), $wg__input_c = _write_guard($scope0_reason, 3), $wi__input_a__OR__input_b__OR__input_c = _write_if($scope0_reason, 0), $wi__input_a = _write_if($scope0_reason, 1), $wi__input_b = _write_if($scope0_reason, 2), $wi__input_c = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const $input_c__closures = /* @__PURE__ */ new Set();
	({ content: _content("a0", (props) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__props_content = _write_guard($scope2_reason, 0);
		_dynamic_tag($scope2_id, "a", props.content, {}, 0, 0, $wg__props_content);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) }).content({ content: _content("a4", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.a, $wg__input_a)}</p><p>${_text_resume($scope1_id, "b", input.b, $wg__input_b)}</p><p>${_text_resume($scope1_id, "c", input.c, $wg__input_c)}</p>`);
		const $scope1_guard = $wg__input_a || $wg__input_b || $wg__input_c;
		if (_write_if($scope0_reason, 0)) {
			const $scope1_write = _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			_subscribe($wi__input_a && $input_a__closures, $scope1_write, "a1", $scope1_guard);
			_subscribe($wi__input_b && $input_b__closures, $scope1_write, "a2", $scope1_guard);
			_subscribe($wi__input_c && $input_c__closures, $scope1_write, "a3", $scope1_guard);
		}
		$scope1_guard || $wi__input_a__OR__input_b__OR__input_c && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_a__OR__input_b__OR__input_c && _scope($scope0_id, {
		g: $wi__input_a && $input_a__closures,
		h: $wi__input_b && $input_b__closures,
		i: $wi__input_c && $input_c__closures
	});
}, 1);

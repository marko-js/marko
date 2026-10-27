// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_b = _write_guard($scope0_reason, 2), $wg__input_c = _write_guard($scope0_reason, 3), $wi__input_a__OR__input_b__OR__input_c = _write_if($scope0_reason, 0), $wi__input_a = _write_if($scope0_reason, 1), $wi__input_b = _write_if($scope0_reason, 2), $wi__input_c = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	const $input_c__closures = new Set();
	const Panel = { content: _content("__tests__/template.marko_2*content", (props) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__props_content = _write_guard($scope2_reason, 0);
		_dynamic_tag($scope2_id, "#text/0", props.content, {}, 0, 0, $wg__props_content);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	Panel.content({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.a, $wg__input_a)}</p><p>${_text_resume($scope1_id, "#text/1", input.b, $wg__input_b)}</p><p>${_text_resume($scope1_id, "#text/2", input.c, $wg__input_c)}</p>`);
		const $scope1_guard = $wg__input_a || $wg__input_b || $wg__input_c;
		if (_write_if($scope0_reason, 0)) {
			const $scope1_write = _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
			_subscribe($wi__input_a && $input_a__closures, $scope1_write, "__tests__/template.marko_1_input_a#0:3/subscribe", $scope1_guard);
			_subscribe($wi__input_b && $input_b__closures, $scope1_write, "__tests__/template.marko_1_input_b#0:4/subscribe", $scope1_guard);
			_subscribe($wi__input_c && $input_c__closures, $scope1_write, "__tests__/template.marko_1_input_c#0:5/subscribe", $scope1_guard);
		}
		$scope1_guard || $wi__input_a__OR__input_b__OR__input_c && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_a__OR__input_b__OR__input_c && _scope($scope0_id, {
		"ClosureScopes:input_a/6": $wi__input_a && $input_a__closures,
		"ClosureScopes:input_b/7": $wi__input_b && $input_b__closures,
		"ClosureScopes:input_c/8": $wi__input_c && $input_c__closures
	}, "__tests__/template.marko", 0);
}, 1);

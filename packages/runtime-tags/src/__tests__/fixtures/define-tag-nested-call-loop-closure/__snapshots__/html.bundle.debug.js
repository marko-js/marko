// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 1), $wi__input_x__OR__input_list = _write_if($scope0_reason, 0), $wi__input_list = _write_if($scope0_reason, 2), $wg__input_list = _write_guard($scope0_reason, 2), $wi__input_x = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	const E = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<span>${_text_resume($scope1_id, "#text/0", input.x, $wg__input_x)}</span>`);
		$wi__input_x__OR__input_list && _subscribe($wi__input_x && $input_x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_x#0:3/subscribe", $wg__input_x);
		$wg__input_x || $wi__input_x__OR__input_list && _resume_branch($scope1_id);
	}, $scope0_id) };
	const D = { content: _content("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		E.content({});
		$wi__input_list && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	_for_of(input.list, (i) => {
		const $scope3_id = _scope_id();
		D.content({});
		$wi__input_list && _scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
	}, 0, $scope0_id, "#text/0", $wg__input_list, $wg__input_list);
	$wi__input_x__OR__input_list && _scope($scope0_id, {
		input_x: $wi__input_list && input.x,
		"ClosureScopes:input_x/5": $wi__input_x && $input_x__closures
	}, "__tests__/template.marko", 0, { input_x: ["input.x"] });
}, 1);

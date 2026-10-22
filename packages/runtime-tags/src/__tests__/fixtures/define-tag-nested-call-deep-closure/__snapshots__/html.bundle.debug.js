// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	const F = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<span>${_text_resume($scope1_id, "#text/0", input.x, $wg__input_x)}</span>`);
		$wi__input_x && _subscribe($input_x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_x#0:3/subscribe", $wg__input_x);
		$wg__input_x || $wi__input_x && _resume_branch($scope1_id);
	}, $scope0_id) };
	const E = { content: _content("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		F.content({});
	}, $scope0_id) };
	const D = { content: _content("__tests__/template.marko_3*content", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		E.content({});
	}, $scope0_id) };
	D.content({});
	$wi__input_x && _scope($scope0_id, { "ClosureScopes:input_x/4": $input_x__closures }, "__tests__/template.marko", 0);
}, 1);

// template.marko
function check(x) {
	if (x) throw new Error("boom");
	return 1;
}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_boom = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_boom__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const y = check(input.boom);
		_html("<em>ok</em>");
		$wi__input_boom && _subscribe($input_boom__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"), "__tests__/template.marko_1_input_boom#0:3/subscribe", 0);
		$wi__input_boom && _resume_branch($scope1_id);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "#text/0", err.message, $wg__err_message)}</b>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "9:6");
	}, void 0, "__tests__/template.marko_2*content");
	_html("</main>");
	$wi__input_boom && _scope($scope0_id, { "ClosureScopes:input_boom/4": $input_boom__closures }, "__tests__/template.marko", 0);
}, 1);

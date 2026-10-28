// template.marko
function boom() {
	throw new Error("boom");
}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_message = _write_guard($scope0_reason, 1), $wg__input_boom = _write_guard($scope0_reason, 2), $wi__input_message__OR__input_boom = _write_if($scope0_reason, 0), $wi__input_message = _write_if($scope0_reason, 1), $wi__input_boom = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_message__closures = new Set();
	const $input_boom__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.message, $wg__input_message)}${_text_resume($scope1_id, "#text/1", input.boom ? boom() : "", $wg__input_boom * 2)}</em>`);
		$wi__input_message__OR__input_boom && _subscribe($wi__input_boom && $input_boom__closures, _subscribe($wi__input_message && $input_message__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"), "__tests__/template.marko_1_input_message#0:3/subscribe", $wg__input_message || $wg__input_boom), "__tests__/template.marko_1_input_boom#0:4/subscribe", $wg__input_message || $wg__input_boom);
		$wg__input_message || $wg__input_boom || $wi__input_message__OR__input_boom && _resume_branch($scope1_id);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "#text/0", err.message, $wg__err_message)}</b>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "7:6");
	}, void 0, "__tests__/template.marko_2*content");
	_html("</main>");
	$wi__input_message__OR__input_boom && _scope($scope0_id, {
		"ClosureScopes:input_message/5": $wi__input_message && $input_message__closures,
		"ClosureScopes:input_boom/6": $wi__input_boom && $input_boom__closures
	}, "__tests__/template.marko", 0);
}, 1);

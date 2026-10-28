// template.marko
function boom() {
	throw new Error("boom");
}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_message = _write_guard($scope0_reason, 0), $wi__input_message = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_message__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<em>${_text_resume($scope2_id, "#text/0", input.message, $wg__input_message)}${_text_resume($scope2_id, "#text/1", count === 1 ? boom() : "", 2)}</em>`);
		_subscribe($count__closures, _subscribe($wi__input_message && $input_message__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_message/7": $wi__input_message && 1
		}, "__tests__/template.marko", "6:4"), "__tests__/template.marko_2_input_message#0:5/subscribe"), "__tests__/template.marko_2_count#0:6/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $wg__err_message = _write_guard($scope1_reason, 0);
		const $scope1_id = _scope_id();
		_html(`<b>${_text_resume($scope1_id, "#text/0", err.message, $wg__err_message)} ${_text_resume($scope1_id, "#text/1", input.message, $wg__input_message * 2)}</b>`);
		_subscribe($wi__input_message && $input_message__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:6"), "__tests__/template.marko_1_input_message#0:5/subscribe", $wg__input_message || $wg__err_message);
		$wg__input_message || $wg__err_message || _resume_branch($scope1_id);
	}, void 0, "__tests__/template.marko_1*content");
	_html(`<button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_message: input.message,
		count,
		"ClosureScopes:input_message/7": $wi__input_message && $input_message__closures,
		"ClosureScopes:count/8": $count__closures
	}, "__tests__/template.marko", 0, {
		input_message: ["input.message"],
		count: "4:6"
	});
}, 1);

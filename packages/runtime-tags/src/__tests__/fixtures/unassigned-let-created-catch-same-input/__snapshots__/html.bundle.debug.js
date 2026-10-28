// template.marko
function boom() {
	throw new Error("boom");
}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_show__closures = new Set();
	let x = input.v;
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.show ? boom() : "ok", $wg__input_show)}</p>`);
		$wi__input_show && _subscribe($input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"), "__tests__/template.marko_1_input_show#0:4/subscribe", $wg__input_show);
		$wg__input_show || $wi__input_show && _resume_branch($scope1_id);
	}, void 0, (err) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_escape(x)}</b>`);
		_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:4");
		_resume_branch($scope2_id);
	}, void 0, "__tests__/template.marko_2*content");
	_scope($scope0_id, {
		x,
		"ClosureScopes:input_show/6": $wi__input_show && $input_show__closures
	}, "__tests__/template.marko", 0, { x: "4:6" });
	_resume_branch($scope0_id);
}, 1);

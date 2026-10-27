// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.label, _write_guard($scope0_reason, 0))}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_scope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
});

// template.marko
function boom(error) {
	throw error;
}
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0), $wg__input_error = _write_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_error__closures = new Set();
	const Lazy = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_set_scope_reason($wg__input_label << 1);
		const $childScope = _peek_scope_id();
		$Child_withLoadAssets({ label: input.label });
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/1": $wi__input_label && _existing_scope($childScope)
		}, "__tests__/template.marko", "5:2"), "__tests__/template.marko_1_input_label#0:3/subscribe", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, $scope0_id) };
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "#text/0", input.error ? boom(input.error) : "ok", $wg__input_error)}</p>`);
		$wi__input_error && _subscribe($input_error__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:2"), "__tests__/template.marko_2_input_error#0:4/subscribe", $wg__input_error);
		$wg__input_error || $wi__input_error && _resume_branch($scope2_id);
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`<b>${_text_resume($scope3_id, "#text/0", err.message, $wg__err_message)}</b>`);
		Lazy.content({});
		_scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "10:4");
	}, void 0, "__tests__/template.marko_3*content");
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_error/6": $wi__input_error && $input_error__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);

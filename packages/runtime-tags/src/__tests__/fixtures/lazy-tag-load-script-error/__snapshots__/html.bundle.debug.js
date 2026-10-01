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
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", [{
	type: "on-click",
	selector: "body"
}]);
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason($wg__input_label << 1);
		const $childScope = _peek_scope_id();
		$Child_withLoadAssets({ label: input.label });
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/template.marko", "4:4"), "__tests__/template.marko_1_input_label#0:3/subscribe", $wg__input_label);
		$wg__input_label || $wi__input_label && _resume_branch($scope1_id);
	}, void 0, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("<div id=error>failed</div>");
	}, void 0, "__tests__/template.marko_2*content");
	_html("</main>");
	$wi__input_label && _scope($scope0_id, { "ClosureScopes:input_label/4": $input_label__closures }, "__tests__/template.marko", 0);
}, 1);

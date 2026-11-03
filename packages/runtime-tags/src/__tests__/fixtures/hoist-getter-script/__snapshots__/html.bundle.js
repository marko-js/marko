// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const label = _resume(() => "ready", "a0");
	_html(`<p>${_text_resume($scope0_id, "a", input.title, $wg__input_title)}</p>`);
	_script($scope0_id, "a1", $wg__input_title);
	_scope($scope0_id, { e: label });
}, 1);

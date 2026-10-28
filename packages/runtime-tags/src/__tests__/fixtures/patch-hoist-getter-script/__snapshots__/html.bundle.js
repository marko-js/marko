// template.marko
_shells({ a: "a !a1;D ;<p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const label = _resume(() => "ready", "a0");
	_html(`<p>${_text_resume($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</p>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { e: label });
}, 1);

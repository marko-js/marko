// template.marko
_shells({ a: "a;D ;<p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {});
}, 1);

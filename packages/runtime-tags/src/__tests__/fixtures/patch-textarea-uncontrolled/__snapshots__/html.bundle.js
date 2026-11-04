// template.marko
_shells({ a: "a; ;<textarea></textarea>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<textarea>${_attr_textarea_value($scope0_id, "a", `[AB]${input.name}[!]`, 0, 1, $scope0_reason, 0)}</textarea>${_el_mark($scope0_id, "a", _updates_from($scope0_reason, 0))}`);
	_scope($scope0_id, {});
}, 1);

// template.marko
_shells({ a: "a; D ;<a> </a>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<a${_attr("href", input.href, $scope0_id, "aa$href", $scope0_reason, 0)}${_attr("title", input.title, $scope0_id, "aa$title", $scope0_reason, 1)}${_attr("hidden", input.hidden, $scope0_id, "aa$hidden", $scope0_reason, 2)}>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 3)}</a>${_el_mark($scope0_id, "a", _updates_from($scope0_reason, 0) || _updates_from($scope0_reason, 1) || _updates_from($scope0_reason, 2))}`);
	_scope($scope0_id, {});
}, 1);

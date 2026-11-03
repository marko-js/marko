// template.marko
_shells({ a: "a !a0;D l ;<p> </p><div></div>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<p>${_text_resume($scope0_id, "a", $global$1.x, 1, 4, 0)}</p><div></div>${_el_resume($scope0_id, "b")}`);
	_fill_global_subscribe("a1", $scope0_id);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);

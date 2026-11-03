// template.marko
_shells({ a: "a !a1;E l ;<main><h1> </h1><input type=checkbox></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1><input${_attr_input_checked($scope0_id, "b", input.agree, _resume(function(next) {
		document.querySelector("main").dataset.agree = String(next);
	}, "a0"), "n0b", $scope0_reason, 1, "wEb", $scope0_reason, 1)} type=checkbox>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);

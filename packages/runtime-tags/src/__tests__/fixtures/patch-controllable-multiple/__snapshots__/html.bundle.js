// template.marko
_shells({ a: "a !a1;E l ;<main><h1> </h1><select><option value=a>A</option><option value=b>B</option></select></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1>`);
	_attr_select_value($scope0_id, "b", input.choice, _resume(function(next) {
		document.querySelector("main").dataset.choice = String(next);
	}, "a0"), () => {
		_html(`<select${_attr("multiple", input.many, $scope0_id, "ab$multiple", $scope0_reason, 1)}><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option></select>`);
	}, "n3b", $scope0_reason, 2, "wEb", $scope0_reason, 2);
	_html(`${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);

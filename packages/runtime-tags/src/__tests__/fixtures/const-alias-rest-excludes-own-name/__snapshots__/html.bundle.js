// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { rest: x, ...rest } = {
		rest: 1,
		a: 2
	};
	_html(`<span${_attrs(rest, "a", $scope0_id, "span")}>${_text_resume($scope0_id, "b", x)}</span>${_el_resume($scope0_id, "a")}<button></button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);

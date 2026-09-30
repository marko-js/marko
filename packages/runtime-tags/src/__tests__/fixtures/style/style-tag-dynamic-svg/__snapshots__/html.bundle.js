// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let color = input.color;
	_html(`<svg>${_style_html(`--M_a0:${_escape_style_value(color)};`)}${_el_resume($scope0_id, "a")}<circle cx=5 cy=5 r=4></circle></svg><button>update</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);

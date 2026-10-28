// template.marko
_shells({ a: "a !a0;D l D ;<h1> </h1><button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1><button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: count });
}, 1);

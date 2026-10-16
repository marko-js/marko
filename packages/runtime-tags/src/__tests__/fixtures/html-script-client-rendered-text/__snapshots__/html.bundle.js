// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<main><button class=show>show</button>${_el_resume($scope0_id, "a")}<button class=inc>inc</button>${_el_resume($scope0_id, "b")}`);
	_if(() => {}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_html("</main>");
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: count });
}, 1);

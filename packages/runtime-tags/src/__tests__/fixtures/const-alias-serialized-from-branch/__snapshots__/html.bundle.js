// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button class=set></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { d: void 0 });
}, 1);

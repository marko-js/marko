// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const getTitle = _resume(() => input.title, "a0", $scope0_id);
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: input.title,
		e: getTitle
	});
}, 1);

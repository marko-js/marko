// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const getTitle = _resume(() => input.title, "__tests__/template.marko_0/getTitle", $scope0_id);
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_getTitle#4");
	_scope($scope0_id, {
		input_title: input.title,
		getTitle
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		getTitle: "1:8"
	});
}, 1);

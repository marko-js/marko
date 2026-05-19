// tags/my-button.marko
var my_button_default = _template("__tests__/tags/my-button.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<button");
	_attrs_content(input, "#button/0", $scope0_id, "button");
	_html(`</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/my-button.marko_0_input");
	writeScope($scope0_id, { input }, "__tests__/tags/my-button.marko", 0, { input: 0 });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const test = "foo";
	my_button_default({
		onClick: _resume(function() {
			console.log(test);
		}, "__tests__/template.marko_0/onClick", $scope0_id),
		content: _content_resume("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("Click");
		}, $scope0_id)
	});
	writeScope($scope0_id, { test }, "__tests__/template.marko", 0, { test: "1:7" });
}, 1);

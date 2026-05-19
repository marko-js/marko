// tags/my-button.marko
var my_button_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<button");
	_attrs_content(input, "a", $scope0_id, "button");
	_html(`</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { c: input });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const test = "foo";
	my_button_default({
		onClick: _resume(function() {
			console.log(test);
		}, "a0", $scope0_id),
		content: _content_resume("a1", () => {
			_scope_reason();
			_scope_id();
			_html("Click");
		}, $scope0_id)
	});
	writeScope($scope0_id, { b: test });
}, 1);

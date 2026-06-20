// tags/my-button.marko
var my_button_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<button");
	_attrs_content(input, "a", $scope0_id, "button");
	_html(`</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	my_button_default({
		onClick: _resume(function() {
			console.log("foo");
		}, "a0"),
		content: _content("a1", () => {
			_scope_reason();
			_scope_id();
			_html("Click");
		})
	});
}, 1);

// tags/child.marko
var child_default = _template("b", (input) => {
	const $sg__input_name = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const { name } = input;
	_html(`<p>${_text_resume($scope0_id, "a", name, $sg__input_name)}</p>`);
	_script($scope0_id, "b0", $sg__input_name);
	_scope($scope0_id, { d: name });
	$sg__input_name || _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	let items = ["a", "b"];
	_html("<div>");
	_scope_id();
	_html("<section>");
	child_default({ name: "outer" });
	forOf(items, (item) => {
		_scope_id();
		child_default({ name: item });
	});
	_html("</section>");
	_html("</div>");
}, 1);

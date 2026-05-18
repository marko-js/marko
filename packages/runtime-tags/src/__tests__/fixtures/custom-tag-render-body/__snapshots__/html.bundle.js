// tags/child/index.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_name = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const { name, content } = input;
	_html(`${_sep($sg__input_name)}${_escape(name)}${_el_resume($scope0_id, "a", $sg__input_name)}`);
	_dynamic_tag($scope0_id, "b", content, {}, 0, 0, _serialize_guard($scope0_reason, 2));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	child_default({
		name: "World",
		content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html("This is the body content");
		})
	});
}, 1);

// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { class: _class, ...rest } = input;
	_html(" <span");
	_attrs_content({
		class: _class,
		...rest
	}, "#span/0", $scope0_id, "span");
	_html(`</span>${_el_resume($scope0_id, "#span/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0__class_rest");
	writeScope($scope0_id, {
		_class,
		rest
	}, "__tests__/tags/child.marko", 0, {
		_class: "1:17",
		rest: "1:28"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	child_default({
		"data-foo": 1,
		...input
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

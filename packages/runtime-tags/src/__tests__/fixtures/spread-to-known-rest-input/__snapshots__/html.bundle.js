// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { class: _class, ...rest } = input;
	_html(" <span");
	_attrs_content({
		class: _class,
		...rest
	}, "a", $scope0_id, "span");
	_html(`</span>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		d: _class,
		e: rest
	});
});

// template.marko
const Child = child_default;
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=known>");
	const $childScope = _peek_scope_id();
	child_default(input);
	_html("</div><div id=dynamic>");
	_dynamic_tag($scope0_id, "b", Child, input, 0, 0, _serialize_guard($scope0_reason, 0));
	_html("</div>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

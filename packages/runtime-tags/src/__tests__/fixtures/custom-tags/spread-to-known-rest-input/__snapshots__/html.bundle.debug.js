// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { class: _class, ...rest } = input;
	_html(" <span");
	_attrs_content({
		class: _class,
		...rest
	}, "#span/0", $scope0_id, "span");
	_html(`</span>${_el_resume($scope0_id, "#span/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0__class#3_rest#4");
	_scope($scope0_id, {
		_class: _serialize_if($scope0_reason, 1) && _class,
		rest: _serialize_if($scope0_reason, 0) && rest
	}, "__tests__/tags/child.marko", 0, {
		_class: "1:17",
		rest: "1:28",
		"EventAttributes:#span/0": ["...rest", "2:23"]
	});
});

// template.marko
const Child = child_default;
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div id=known>");
	_set_serialize_reason($sg__input << 1 | $sg__input << 3);
	const $childScope = _peek_scope_id();
	child_default(input);
	_html("</div><div id=dynamic>");
	_dynamic_tag($scope0_id, "#text/1", Child, input, 0, 0, $sg__input);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

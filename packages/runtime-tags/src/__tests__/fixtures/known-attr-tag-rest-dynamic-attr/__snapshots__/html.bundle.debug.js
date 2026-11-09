// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { item: { content, ...attrs } } = input;
	_html(`<div${_attrs(attrs, "#div/0", $scope0_id, "div")}>Body</div>${_el_mark($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_attrs#4");
	_scope($scope0_id, {}, "__tests__/tags/child.marko", 0, { "EventAttributes:#div/0": ["...attrs", "2:9"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let cls = "a";
	_html(`<button>grow</button>${_el_mark($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	child_default({ item: attrTag({ class: cls }) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		cls,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { cls: "1:6" });
}, 1);

// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { item: { content, ...attrs } } = input;
	_html(`<div${_attrs(attrs, "a", $scope0_id, "div")}>Body</div>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = { class: "a" };
	_html(`<button>grow</button>${_el_mark($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	child_default({ item: attrTag({ ...obj }) });
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: obj?.class,
		b: _existing_scope($childScope)
	});
}, 1);

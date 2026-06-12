// tags/list.marko
var list_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { d: input.item });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	list_default({ item: attrTags(attrTags(attrTag({ label: "a" }), { label: "b" }), { label: "c" }) });
	list_default({ item: attrTag({ label: "solo" }) });
}, 1);

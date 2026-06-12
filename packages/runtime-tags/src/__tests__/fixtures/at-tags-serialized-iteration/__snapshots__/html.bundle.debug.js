// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/list.marko_0_input_item");
	writeScope($scope0_id, { input_item: input.item }, "__tests__/tags/list.marko", 0, { input_item: ["input.item"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	list_default({ item: attrTags(attrTags(attrTag({ label: "a" }), { label: "b" }), { label: "c" }) });
	list_default({ item: attrTag({ label: "solo" }) });
}, 1);

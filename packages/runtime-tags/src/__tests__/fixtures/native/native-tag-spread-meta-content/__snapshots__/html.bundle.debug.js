// tags/meta-tag.marko
var meta_tag_default = _template("__tests__/tags/meta-tag.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<meta${_attrs(input.attrs, "#meta/0", $scope0_id, "meta")}>${_el_resume($scope0_id, "#meta/0")}`);
	_script($scope0_id, "__tests__/tags/meta-tag.marko_0_input_attrs#3");
	_scope($scope0_id, {}, "__tests__/tags/meta-tag.marko", 0, { "EventAttributes:#meta/0": ["...input.attrs", "1:10"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let description = "a";
	_html(`<button id=change>change</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	meta_tag_default({ attrs: {
		name: "description",
		content: description
	} });
	meta_tag_default({ attrs: {
		name: "static",
		content: "fixed"
	} });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		description,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { description: "1:6" });
}, 1);

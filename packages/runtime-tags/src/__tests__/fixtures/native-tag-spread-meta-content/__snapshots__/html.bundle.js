// tags/meta-tag.marko
var meta_tag_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<meta${_attrs(input.attrs, "a", $scope0_id, "meta")}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let description = "a";
	_html(`<button id=change>change</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	meta_tag_default({ attrs: {
		name: "description",
		content: description
	} });
	meta_tag_default({ attrs: {
		name: "static",
		content: "fixed"
	} });
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: description,
		b: _existing_scope($childScope)
	});
}, 1);

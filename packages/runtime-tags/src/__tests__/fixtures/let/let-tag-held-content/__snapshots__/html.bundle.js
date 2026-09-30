// tags/my-tag.marko
var my_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { as: inputAs, class: inputClass, content: inputContent, ...htmlInput } = input;
	let content = { content: _content_resume("b0", () => {
		_scope_id();
		_scope_reason();
		_html("default");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", inputAs || "div", {
		...htmlInput,
		class: ["foo", inputClass],
		content
	});
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		d: inputAs,
		e: inputClass,
		f: inputContent,
		g: htmlInput,
		i: _serialize_if($scope0_reason, 0) && content
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let as = "div";
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	my_tag_default({
		as,
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("Div");
		}, $scope0_id)
	});
	_html(`<button></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

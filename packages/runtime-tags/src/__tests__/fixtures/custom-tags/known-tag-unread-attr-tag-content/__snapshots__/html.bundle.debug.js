// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a = _serialize_guard($scope0_reason, 1), $sg__input_item_content = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.a, $sg__input_a)}</span>`);
	_dynamic_tag($scope0_id, "#text/1", input.item?.content, {}, 0, 0, $sg__input_item_content);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// tags/static-child.marko
var static_child_default = _template("__tests__/tags/static-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>static</span>");
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_set_serialize_reason(34);
	let $item;
	if (n) {
		$item = attrTag({ content: _content("__tests__/template.marko_7*content", () => {
			_scope_reason();
			const $scope7_id = _scope_id();
			_html("item");
		}, $scope0_id) });
	}
	const $childScope = _peek_scope_id();
	child_default({
		a: 1,
		item: $item
	});
	static_child_default({});
	_html(`<button class=inc>inc</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);

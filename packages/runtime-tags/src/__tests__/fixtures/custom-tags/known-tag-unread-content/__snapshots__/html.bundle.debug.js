// tags/static-child.marko
var static_child_default = _template("__tests__/tags/static-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>static</span>");
});

// tags/label-child.marko
var label_child_default = _template("__tests__/tags/label-child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item_label = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.item.label, $sg__input_item_label)}</span>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/label-child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	let m = 1;
	static_child_default({});
	label_child_default({ item: attrTag({ label: "item" }) });
	_set_serialize_reason(2);
	let $item;
	if (n) {
		$item = attrTag({ label: "if" });
	}
	const $childScope = _peek_scope_id();
	label_child_default({ item: $item });
	let $item2;
	forTo(1, 0, 1, (i) => {
		$item2 = attrTags($item2, { label: `for ${i}` });
	});
	label_child_default({ item: $item2 });
	_html(`<span>${_escape(m)}</span><button class=inc>inc</button>${_el_resume($scope0_id, "#button/5")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);

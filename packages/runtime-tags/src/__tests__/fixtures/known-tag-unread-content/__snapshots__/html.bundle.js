// tags/static-child.marko
var static_child_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>static</span>");
});

// tags/label-child.marko
var label_child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.item.label, $wg__input_item_label)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	let m = 1;
	static_child_default({});
	label_child_default({ item: attrTag({ label: "item" }) });
	_set_scope_reason(2);
	let $item;
	$item = attrTag({ label: "if" });
	const $childScope = _peek_scope_id();
	label_child_default({ item: $item });
	let $item2;
	forTo(1, 0, 1, (i) => {
		$item2 = attrTags($item2, { label: `for ${i}` });
	});
	label_child_default({ item: $item2 });
	_html(`<span>${_escape(m)}</span><button class=inc>inc</button>${_el_resume($scope0_id, "f")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: n,
		c: _existing_scope($childScope)
	});
}, 1);

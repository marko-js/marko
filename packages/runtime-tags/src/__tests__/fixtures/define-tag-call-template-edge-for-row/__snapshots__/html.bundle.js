// tags/row.marko
var row_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Item = { content: _content("b0", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 0);
		_html(`<li>${_text_mark($scope1_id, "a", label, $wg__label)}</li>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	Item.content({ label: input.label });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let labels = ["a", "b"];
	_html("<ul>");
	_for_of(labels, (label) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		row_default({ label });
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button id=add>Add</button>${_el_mark($scope0_id, "b")}<button id=remove>Remove</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: labels });
}, 1);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Row = { content: _content("a0", ({ item }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<li>${_text_mark($scope1_id, "a", item)}</li>`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	let items = [1, 2];
	_html("<ul>");
	_for_of(items, (item) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		Row.content({ item });
		_scope($scope2_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button id=add>Add</button>${_el_mark($scope0_id, "b")}<button id=remove>Remove</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { d: items });
}, 1);

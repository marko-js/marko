// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return input.v;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	];
	let selected = 1;
	let short = false;
	const $childScope = _peek_scope_id();
	let r = child_default({ v: short });
	_var($scope0_id, "b", $childScope, "a0");
	_for_of(r ? items.slice(0, 1) : items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<span${item.id === selected ? " class=on" : ""}>${_escape(item.id)}</span>${_el_mark($scope1_id, "a")}`);
		_scope($scope1_id, { M: item?.id });
	}, "id", $scope0_id, "c", 1, 1, 0, 0, 1);
	_html(`<button>go</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: items,
		f: selected,
		a: _existing_scope($childScope)
	});
}, 1);

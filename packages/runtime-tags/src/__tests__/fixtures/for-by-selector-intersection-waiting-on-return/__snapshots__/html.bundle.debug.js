// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.v;
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_r#7/var");
	_for_of(r ? items.slice(0, 1) : items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<span${item.id === selected ? " class=on" : ""}>${_escape(item.id)}</span>${_el_mark($scope1_id, "#span/0")}`);
		_scope($scope1_id, { "#LoopKey": item?.id }, "__tests__/template.marko", "5:2", { "#LoopKey": ["item.id", "5:6"] });
	}, "id", $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_html(`<button>go</button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		items,
		selected,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		items: "1:6",
		selected: "2:6"
	});
}, 1);

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
	let list = [
		{ name: "a" },
		{ name: "b" },
		{ name: "c" }
	];
	let short = false;
	const $childScope = _peek_scope_id();
	let r = child_default({ v: short });
	_var($scope0_id, "b", $childScope, "a0");
	_for_to(r ? 0 : list.length - 1, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_text_mark($scope1_id, "a", list[i].name)}</span>`);
		_scope($scope1_id, { M: i });
	}, 0, $scope0_id, "c", 1, 1, 0, 0, 1);
	_html(`<button>go</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: list,
		f: list?.length,
		h: r,
		a: _existing_scope($childScope)
	});
}, 1);

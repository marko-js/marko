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
	let list = [
		{ name: "a" },
		{ name: "b" },
		{ name: "c" }
	];
	let short = false;
	const $childScope = _peek_scope_id();
	let r = child_default({ v: short });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_r#7/var");
	_for_to(r ? 0 : list.length - 1, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_text_mark($scope1_id, "#text/0", list[i].name)}</span>`);
		_scope($scope1_id, { "#LoopKey": i }, "__tests__/template.marko", "4:2", { "#LoopKey": "4:6" });
	}, 0, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_html(`<button>go</button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		list,
		list_length: list?.length,
		r,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		list: "1:6",
		list_length: ["list.length", "1:6"],
		r: "3:8"
	});
}, 1);

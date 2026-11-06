// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.v;
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_short = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let l = [
		{ name: "a" },
		{ name: "b" },
		{ name: "c" }
	];
	const $childScope = _peek_scope_id();
	let r = child_default({ v: input.short });
	$wi__input_short && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_r#9/var");
	_for_to(r ? 0 : l.length - 1, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_text_mark($scope1_id, "#text/0", l[i].name)}</span>`);
		_scope($scope1_id, { "#LoopKey": i }, "__tests__/template.marko", "3:2", { "#LoopKey": "3:6" });
	}, 0, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_html(`<button>go</button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		l,
		l_length: $wi__input_short && l?.length,
		r,
		"#childScope/0": $wi__input_short && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		l: "1:6",
		l_length: ["l.length", "1:6"],
		r: "2:8"
	});
}, 1);

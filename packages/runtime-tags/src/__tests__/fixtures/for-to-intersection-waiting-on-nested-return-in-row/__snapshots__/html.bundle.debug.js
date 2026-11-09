// tags/grand.marko
var grand_default = _template("__tests__/tags/grand.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.v;
	return $return;
});

// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_v = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let g = grand_default({ v: input.v });
	$wi__input_v && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/child.marko_0_g#5/var");
	const $return = g;
	$wi__input_v && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/child.marko", 0);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	forOf([0, 1], (outer) => {
		const $scope1_id = _scope_id();
		let l = [
			{ name: "a" },
			{ name: "b" },
			{ name: "c" }
		];
		let short = false;
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		let r = child_default({ v: short });
		_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_r#7/var");
		_for_to(r ? 0 : l.length - 1, 0, 1, (i) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_text_mark($scope2_id, "#text/0", l[i].name)}</span>`);
			_scope($scope2_id, { "#LoopKey": i }, "__tests__/template.marko", "5:4", { "#LoopKey": "5:8" });
		}, 0, $scope1_id, "#text/2", 1, 1, 0, 0, 1);
		_html(`<button>go</button>${_el_mark($scope1_id, "#button/3")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			l,
			l_length: l?.length,
			r,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2", {
			l: "2:8",
			l_length: ["l.length", "2:8"],
			r: "4:10"
		});
	});
}, 1);

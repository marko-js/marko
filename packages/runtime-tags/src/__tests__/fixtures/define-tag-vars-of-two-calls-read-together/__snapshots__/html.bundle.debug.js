// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Child = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let x = false;
		_html(`<button>t</button>${_el_mark($scope1_id, "#button/0")}`);
		const $return = x ? "on" : "off";
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { x }, "__tests__/template.marko", "1:2", { x: "2:8" });
		return $return;
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	let v = Child.content({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_v#5/var");
	const $childScope2 = _peek_scope_id();
	let w = Child.content({});
	_var($scope0_id, "#scopeOffset/3", $childScope2, "__tests__/template.marko_0_w#6/var");
	_html(`<p>${_text_mark($scope0_id, "#text/4", v + w)}</p>`);
	_scope($scope0_id, {
		v,
		w,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		v: "6:8",
		w: "7:8"
	});
}, 1);

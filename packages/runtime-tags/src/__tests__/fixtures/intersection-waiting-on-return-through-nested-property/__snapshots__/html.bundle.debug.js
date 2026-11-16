// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $return = { a: input.x + input.y };
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_x: _write_if($scope0_reason, 2) && input.x,
		input_y: _write_if($scope0_reason, 1) && input.y
	}, "__tests__/tags/child.marko", 0, {
		input_x: ["input.x"],
		input_y: ["input.y"]
	});
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let other = 1;
	_set_scope_reason(42);
	const $childScope = _peek_scope_id();
	let r = child_default({
		x: count,
		y: other
	});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_r#6/var");
	const o = { ...r };
	const q = { inner: o };
	_html(`<p>${_text_mark($scope0_id, "#text/2", q.inner.a + other)}</p><button>inc</button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		other,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		other: "2:6"
	});
}, 1);

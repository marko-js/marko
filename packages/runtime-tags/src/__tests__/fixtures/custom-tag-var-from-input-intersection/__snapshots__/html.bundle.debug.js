// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.x + input.y;
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {
		input_x: _serialize_if($scope0_reason, 2) && input.x,
		input_y: _serialize_if($scope0_reason, 1) && input.y
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
	let x = 0;
	let y = 0;
	let b = 0;
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	let v = child_default({
		x,
		y
	});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_v#7/var");
	_html(`<button>${_text_resume($scope0_id, "#text/3", v + ":" + b)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		x,
		b,
		v,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		x: "1:6",
		b: "3:6",
		v: "4:8"
	});
}, 1);

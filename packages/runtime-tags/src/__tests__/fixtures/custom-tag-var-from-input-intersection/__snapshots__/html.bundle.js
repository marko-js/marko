// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.x + input.y;
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {
		c: _serialize_if($scope0_reason, 2) && input.x,
		d: _serialize_if($scope0_reason, 1) && input.y
	});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
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
	_var($scope0_id, "b", $childScope, "a0");
	_html(`<button>${_text_resume($scope0_id, "d", v + ":0")}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: x,
		g: b,
		h: v,
		a: _existing_scope($childScope)
	});
}, 1);

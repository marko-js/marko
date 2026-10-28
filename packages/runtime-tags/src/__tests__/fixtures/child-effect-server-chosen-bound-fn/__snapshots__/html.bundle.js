// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0);
	_scope($scope0_id, {
		c: input.fn,
		d: input.v
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_pick = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let last = "none";
	const fa = _resume(function(v) {
		last = "a" + v;
	}, "a0", $scope0_id);
	const fb = _resume(function(v) {
		last = "b" + v;
	}, "a1", $scope0_id);
	const $childScope = _peek_scope_id();
	child_default({
		v: input.x,
		fn: input.pick ? fa : fb
	});
	_html(`<p>${_text_resume($scope0_id, "b", last)}</p>`);
	_scope($scope0_id, {
		h: $wi__input_pick && fa,
		i: $wi__input_pick && fb,
		a: _write_if($scope0_reason, 0) && _existing_scope($childScope)
	});
}, 1);

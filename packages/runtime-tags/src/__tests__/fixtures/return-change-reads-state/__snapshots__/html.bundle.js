// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = input.v;
	const $return = x;
	_html(`<span>${_text_resume($scope0_id, "a", x)}</span>`);
	_scope($scope0_id, {
		e: x,
		U: _resume(function(v) {
			x = x === v ? x : v;
		}, "b0", $scope0_id) || void 0
	});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let c = child_default({ v: input.v });
	_var($scope0_id, "b", $childScope, "a0");
	_html(`<p>${_text_resume($scope0_id, "c", c)}</p><button>+</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		h: c,
		a: _existing_scope($childScope)
	});
}, 1);

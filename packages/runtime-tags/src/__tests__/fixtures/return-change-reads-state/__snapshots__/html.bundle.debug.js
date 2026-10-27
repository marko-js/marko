// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = input.v;
	const $return = x;
	_html(`<span>${_text_resume($scope0_id, "#text/0", x)}</span>`);
	_scope($scope0_id, {
		x,
		"#TagVariableChange": _resume(function(v) {
			x = x === v ? x : v;
		}, "__tests__/tags/child.marko_0/valueChange", $scope0_id) || void 0
	}, "__tests__/tags/child.marko", 0, { x: "1:6" });
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let c = child_default({ v: input.v });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_c#7/var");
	_html(`<p>${_text_resume($scope0_id, "#text/2", c)}</p><button>+</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		c,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { c: "1:8" });
}, 1);

// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_input");
	writeScope($scope0_id, { input }, "__tests__/tags/child.marko", 0, { input: 0 });
});

// tags/source.marko
var source_default = _template("__tests__/tags/source.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = _resume(() => 1, "__tests__/tags/source.marko_0/_return");
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $x_getter = _hoist($scope0_id, "__tests__/template.marko_0_x/hoist");
	child_default({ y: $x_getter });
	let x = source_default({});
	writeScope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "2:9" });
	_assert_hoist(x);
}, 1);

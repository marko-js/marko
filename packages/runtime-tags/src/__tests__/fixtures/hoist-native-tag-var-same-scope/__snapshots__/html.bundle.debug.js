// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/child.marko_0_input");
	writeScope($scope0_id, { input }, "__tests__/tags/child.marko", 0, { input: 0 });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $el_getter = _hoist($scope0_id, "__tests__/template.marko_0_#div/hoist");
	child_default({ value: $el_getter });
	_html(`<div></div>${_el_resume($scope0_id, "#div/1")}`);
	child_default({ value: $el_getter });
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);

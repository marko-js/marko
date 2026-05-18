// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { c: input });
});

// tags/source.marko
var source_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	return _resume(() => 1, "c0");
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({ y: _hoist($scope0_id, "a0") });
	let x = source_default({});
	writeScope($scope0_id, { d: x });
}, 1);

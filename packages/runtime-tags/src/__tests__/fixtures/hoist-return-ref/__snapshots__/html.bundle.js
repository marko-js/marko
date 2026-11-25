// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: input });
});

// tags/source.marko
function $_return() {
	return 1;
}
_resume("c0", $_return);
var source_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	return $_return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $x_getter = _hoist($scope0_id, "a0");
	child_default({ y: $x_getter });
	let x = source_default({});
	_scope($scope0_id, { d: x });
}, 1);

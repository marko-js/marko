// tags/thing.marko
var thing_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "c0");
	writeScope($scope0_id, { c: input.value });
});

// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	const $return = _resume(() => (html) => ((el) => el())(_el_read_error).innerHTML = html, "b0", $scope0_id);
	writeScope($scope0_id, {});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	thing_default({ value: _hoist($scope0_id, "a0") });
	writeScope($scope0_id, { d: child_default({}) });
}, 1);

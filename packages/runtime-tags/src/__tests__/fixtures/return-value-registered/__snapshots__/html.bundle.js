// tags/getter.marko
var getter_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return _resume(() => {
		return "hello";
	}, "b0");
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let get = getter_default({});
	_html(`<div></div>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: get });
}, 1);

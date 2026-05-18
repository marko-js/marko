// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(typeof input.fn)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({ fn: () => ((x) => x())(_hoist_read_error) });
	const x = 1;
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "5:8" });
	_assert_hoist(x);
}, 1);

// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// tags/parent-a.marko
const $Child_withLoadAssets$1 = withLoadAssets(child_default, "ready:__tests__/tags/child.marko", [{
	type: "visible",
	selector: "body"
}]);
var parent_a_default = _template("__tests__/tags/parent-a.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Child_withLoadAssets$1({ value: 1 });
});

// tags/parent-b.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/tags/child.marko", [{ type: "idle" }]);
var parent_b_default = _template("__tests__/tags/parent-b.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Child_withLoadAssets({ value: 2 });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	parent_a_default({});
	parent_b_default({});
}, 1);

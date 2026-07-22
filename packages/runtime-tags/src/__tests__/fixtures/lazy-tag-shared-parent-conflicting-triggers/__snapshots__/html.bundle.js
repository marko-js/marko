// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "b0");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/parent-a.marko
const $Child_withLoadAssets$1 = withLoadAssets(child_default, "_b", [{
	type: "visible",
	selector: "body"
}]);
var parent_a_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	$Child_withLoadAssets$1({ value: 1 });
});

// tags/parent-b.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_b", [{ type: "idle" }]);
var parent_b_default = _template("d", (input) => {
	_scope_reason();
	_scope_id();
	$Child_withLoadAssets({ value: 2 });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	parent_a_default({});
	parent_b_default({});
}, 1);

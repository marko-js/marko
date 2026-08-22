// child.marko
_shells({ a: "a !a0; D%c%;<button><!>:<!></button>" });
var child_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "b", input.label, $scope0_owned, 0)}${_el_resume($scope0_id, "b")}:<!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a0", count, 1);
	$scope0_reason && writeScope($scope0_id, { g: count });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", [{
	type: "on-click",
	selector: "body"
}], 1);
var template_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	$Child_withLoadAssets({ label: input.label });
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { b: _existing_scope($childScope) });
}, 1, () => [$Child_withLoadAssets]);

// tags/badge/index.marko
var badge_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", $global().brand)}${_el_resume($scope0_id, "a")}</span>`);
	_script($scope0_id, "b0");
	_patch_effect($scope0_id, "b0", "! brand", 1);
	$scope0_reason && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	badge_default({});
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

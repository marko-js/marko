// tags/echo/index.marko
var echo_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const { cfg: { ...rest } } = input;
	_html(`<em>${_patch_text($scope0_id, "a", rest.label, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</em>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	echo_default({ cfg: { label: input.label } });
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [echo_default]);

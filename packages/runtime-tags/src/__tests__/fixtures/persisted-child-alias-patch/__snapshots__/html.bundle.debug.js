// tags/echo/index.marko
var echo_default = _template_persisted("__tests__/tags/echo/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const x = input;
	_html(`<em>${_patch_text($scope0_id, "#text/0", x.label, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</em>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/echo/index.marko", 0);
}, 0, 0);

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	echo_default({ label: input.label });
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [echo_default]);

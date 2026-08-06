// tags/badge/index.marko
var badge_default = _template_persisted("__tests__/tags/badge/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "#text/0", $global().brand)}${_el_resume($scope0_id, "#text/0")}</span>`);
	_script($scope0_id, "__tests__/tags/badge/index.marko_0");
	_patch_effect($scope0_id, "__tests__/tags/badge/index.marko_0", "! brand", 1);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/badge/index.marko", 0);
});

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	badge_default({});
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

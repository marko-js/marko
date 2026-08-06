// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title)}${_el_resume($scope0_id, "a")}</h1></main>`);
	_script($scope0_id, "a0");
	_patch_effect($scope0_id, "a0", "e f");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.a,
		f: input.b
	}) : (_patch_write($scope0_id, "e", input.a), _patch_write($scope0_id, "f", input.b));
}, 1);

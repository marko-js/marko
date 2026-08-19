// tags/widget/index.marko
var widget_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_patch_dynamic_tag($scope0_id, "a", input.renderer, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "a", input.renderer, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.renderer,
		f: open
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.renderer);
	_resume_branch($scope0_id);
}, 1, () => [widget_default]);

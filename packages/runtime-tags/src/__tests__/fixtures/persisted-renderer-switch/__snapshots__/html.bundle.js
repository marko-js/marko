// tags/banner/index.marko
var banner_default = _template_persisted("b", (input) => {
	_persisted_reason();
	_scope_id();
	_html("<b>banner</b>");
}, 0, 0);

// tags/widget/index.marko
var widget_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_patch_dynamic_tag($scope0_id, "a", input.renderer, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "a", input.renderer, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</section>");
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	widget_default({ renderer: input.kind === "banner" ? banner_default : input.kind });
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope2 = _peek_scope_id();
			widget_default({ renderer: input.kind === "banner" ? banner_default : input.kind });
			writeScope($scope1_id, { a: _existing_scope($childScope2) });
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		f: input.kind,
		g: open,
		a: _existing_scope($childScope)
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.kind);
	_resume_branch($scope0_id);
}, 1, () => [widget_default]);

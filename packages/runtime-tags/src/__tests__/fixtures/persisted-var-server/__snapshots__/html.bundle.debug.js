// tags/labeler/index.marko
var labeler_default = _template_persisted("__tests__/tags/labeler/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<span>fmt</span>");
	const $return = "[" + input.title + "]";
	return $return;
}, 0, 0);

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	const $childScope = _peek_scope_id();
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	let label = labeler_default({ title: input.title });
	_patch_child($scope0_id, "#childScope/0", $childScope);
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_label/var");
	_html(`<p>${_patch_text($scope0_id, "#text/2", label, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/2")} <!>${_escape(count)}${_el_resume($scope0_id, "#text/3")}</p><button>+</button>${_el_resume($scope0_id, "#button/4")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [labeler_default]);

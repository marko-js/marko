// template.marko
_shells({ a: "a !a0; b ;<a>x</a><img>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<a${_patch_attrs({
		href: input.url,
		title: input.title,
		class: input.cls
	}, "a", $scope0_id, "a", void 0, $scope0_reason, 3)}>x</a>${_el_resume($scope0_id, "a")}<img${_patch_attr($scope0_id, "ab src", "src", `${input.url}?w=${input.width}`, $scope0_reason, 2)}>${_el_resume($scope0_id, "b", _mask_group($scope0_reason, 2))}`);
	_script($scope0_id, "a0");
	_patch_write($scope0_id, "we", input.url, 1);
	_patch_write($scope0_id, "wf", input.title, 1);
	_patch_write($scope0_id, "wg", input.cls, 1);
	_patch_write($scope0_id, "wi", input.width, 1);
	$scope0_page && _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.url,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.title,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.cls,
		i: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2)) && input.width
	});
}, 1);

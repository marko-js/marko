// template.marko
_shells({ a: "a !a0 a1; c ;<input><p id=out>-</p><button>interactive</button>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<input${_patch_attrs({
		type: "checkbox",
		...input.attrs,
		checked: input.on
	}, "a", $scope0_id, "input", 1, $scope0_reason, 0)}>${_el_resume($scope0_id, "a")}<p id=out>-</p><button>interactive</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {
		e: _source_if($scope0_reason, 2) && input.attrs,
		f: _source_if($scope0_reason, 1) && input.on
	});
}, 1, 0);

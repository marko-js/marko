// template.marko
_renderer_shells({ a0: ",`a0;D ;<li> </li>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "a")}</h1><ul>`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", item.label)}${_escape(item.label)}${_el_resume($scope1_id, "a")}</li>`);
		writeScope($scope1_id, {});
	}, "id", $scope0_id, "b", $sg__input_items, $sg__input_items, $sg__input_items, void 0, void 0, "a0");
	_html(`</ul>${_el_resume($scope0_id, "b", $sg__input_items)}<button>Count <!>${_escape(count)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && writeScope($scope0_id, { i: count });
	_resume_branch($scope0_id);
}, 1);

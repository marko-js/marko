// template.marko
_shells({
	a: "a !a2; b D ;<ul></ul><button> </button>",
	a0: "a0 !a1; D ;<li> </li>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li${_patch_attrs(item.attrs, "a", $scope1_id, "li", void 0, $scope0_owned, 0)}>${_patch_text($scope1_id, "b", item.id, $scope0_owned, 0)}${_el_resume($scope1_id, "b")}</li>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		writeScope($scope1_id, {});
	}, (item) => item.id, $scope0_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a0");
	_html(`</ul>${_el_resume($scope0_id, "a", $sg__input_items)}<button>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	$scope0_reason && writeScope($scope0_id, { g: count });
	_resume_branch($scope0_id);
}, 1, 0);

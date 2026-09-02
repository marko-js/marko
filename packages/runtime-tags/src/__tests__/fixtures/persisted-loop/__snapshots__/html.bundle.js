// template.marko
_shells({
	a: "a !a1;E l b Db%;<main><h1> </h1><ul></ul><button>Count <!></button></main>",
	a0: "a0;D ;<li> </li>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h1><ul>`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", item.label, void 0, $scope0_owned, 1)}</li>`);
		_scope($scope1_id, {});
	}, "id", $scope0_id, "b", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a0", $scope0_owned, 1);
	_html(`</ul>${_el_resume($scope0_id, "b", $sg__input_items)}<button>Count ${_text_resume($scope0_id, "d", count, 2)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, { i: count });
	_resume_branch($scope0_id);
}, 1, 0);

// template.marko
_shells({
	a: "a !a2 a3;D D l%b D ;<main><a> </a><!><button> </button></main>",
	a0: "a0 !a1; ;<img>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><a${_patch_attrs({
		href: "/static",
		...input.attrs
	}, "a", $scope0_id, "a", $scope0_owned, 1)}>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_owned, 2)}</a>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<img${_patch_attrs({
				alt: "hero",
				...input.img
			}, "a", $scope1_id, "img", $scope0_owned, 4)}>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html(`<button>${_text_resume($scope0_id, "e", count)}</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	$scope0_reason && _scope($scope0_id, { l: count });
	_resume_branch($scope0_id);
}, 1, 0);
